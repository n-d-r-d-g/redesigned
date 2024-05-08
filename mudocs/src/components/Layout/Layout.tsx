import {
  ChangeEvent,
  PropsWithChildren,
  useCallback,
  useRef,
  useState,
} from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import Image from "next/image";
import { Button, Modal } from "flowbite-react";
import { FaGithub as FaGithubIcon } from "react-icons/fa";
import Select from "../Select/Select";
import TypedTrans from "../TypedTrans/TypedTrans";
import { DEFAULT_I18N_NAMESPACE, I18N_LOCALES } from "../../../constants";

function LanguageSwitch() {
  const { t: tCommon, i18n } = useTranslation(DEFAULT_I18N_NAMESPACE);
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const nextLocale = useRef<(typeof I18N_LOCALES)[number] | null>(
    i18n.language as unknown as (typeof I18N_LOCALES)[number],
  );

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

  const handleLanguageSelect = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      nextLocale.current = e.currentTarget
        .value as unknown as (typeof I18N_LOCALES)[number];

      openModal();
    },
    [],
  );

  const handleLanguageChange = useCallback(() => {
    closeModal();

    if (!nextLocale.current) return;

    /* Avoid using i18n.changeLanguage because it does not persist the selected language on reload */
    router.push(router.asPath, undefined, {
      locale: nextLocale.current as string,
    });
  }, [router]);

  const handleLanguageSwitchDismiss = useCallback(() => {
    closeModal();

    nextLocale.current = null;
  }, []);

  return (
    <div className="flex flex-row items-center gap-2">
      <Modal show={isModalOpen} onClose={closeModal}>
        <Modal.Header>
          {tCommon("languageSwitch.confirmation.title")}
        </Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              {tCommon("languageSwitch.confirmation.disclaimer")}
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              {tCommon("languageSwitch.confirmation.question")}
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button color="blue" onClick={handleLanguageChange}>
            {tCommon("reload")}
          </Button>
          <Button color="gray" onClick={handleLanguageSwitchDismiss}>
            {tCommon("cancel")}
          </Button>
        </Modal.Footer>
      </Modal>
      <label
        htmlFor="language-switch"
        aria-label={tCommon(`changeLanguage`)}
        className="text-xl"
      ></label>
      <Select
        id="language-switch"
        onChange={handleLanguageSelect}
        value={i18n.language}
      >
        {I18N_LOCALES.map((locale) => (
          <option key={locale} value={locale}>
            {locale?.toUpperCase()}
          </option>
        ))}
      </Select>
    </div>
  );
}

export default function Layout({ children }: PropsWithChildren) {
  const { t: tCommon } = useTranslation("common");

  return (
    <div className="flex min-h-[100svh] flex-col">
      <nav className="hide-on-print sticky top-0 z-10 mx-auto flex w-[120rem] max-w-full flex-row items-center justify-between border-b border-slate-200 bg-white p-3 dark:border-slate-700 dark:bg-slate-900">
        <Link
          href={"/"}
          className="flex flex-row items-center gap-2 rounded text-sm font-bold text-slate-700 grayscale hover:text-black hover:no-underline hover:grayscale-0 focus:ring-0 focus:ring-offset-0 focus-visible:text-black focus-visible:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-4 focus-visible:ring-offset-white focus-visible:grayscale-0 motion-safe:transition motion-safe:duration-300 dark:text-slate-300 dark:hover:text-white dark:focus-visible:text-white dark:focus-visible:ring-blue-500 focus-visible:dark:ring-offset-slate-900"
        >
          <span aria-hidden>
            <Image
              src="/logo.svg"
              alt="MUDOCS"
              width={16}
              height={20}
              priority
            />
          </span>{" "}
          MUDOCS
        </Link>
        <aside className="flex flex-row items-center gap-1">
          <Link
            href="https://github.com/n-d-r-d-g/redesigned/tree/main/mudocs"
            target="_blank"
            rel="noreferrer noopener nofollow"
            title={tCommon("githubLink")}
            aria-label={tCommon("githubLink")}
            className="inline-flex items-center rounded-full p-2 text-center text-sm font-medium text-black hover:bg-slate-200 focus:ring-0 focus:ring-offset-0 focus-visible:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-4 focus-visible:ring-offset-white dark:text-white dark:hover:bg-slate-700 dark:focus-visible:ring-blue-500 focus-visible:dark:ring-offset-slate-900"
            passHref
          >
            <FaGithubIcon size={16} />
          </Link>
          <LanguageSwitch />
        </aside>
      </nav>
      <main className="root-container flex min-h-0 grow flex-col p-3">
        {children}
      </main>
      <footer className="hide-on-print grid place-content-center py-2">
        <TypedTrans
          ns="common"
          i18nKey="websiteBuiltBy"
          components={{
            span: (
              <span className="text-center text-xs text-gray-700 dark:text-gray-400" />
            ),
            HeartTitle: (
              <span
                title={tCommon("websiteBuiltByTitle")}
                aria-label={tCommon("websiteBuiltByTitle")}
                className="cursor-help"
              />
            ),
            GithubLink: (
              <Link
                href="https://github.com/n-d-r-d-g"
                target="_blank"
                rel="noreferrer noopener nofollow"
                className="rounded font-extrabold focus:ring-0 focus:ring-offset-0 focus-visible:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-blue-500 focus-visible:dark:ring-offset-slate-900"
              />
            ),
          }}
        />
      </footer>
    </div>
  );
}
