import { PropsWithChildren, useCallback } from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import Checkbox from "@/components/Checkbox/Checkbox";
import TechnicalTerm from "@/components/TechnicalTerm/TechnicalTerm";
import TypedTrans from "@/components/TypedTrans/TypedTrans";
import styles from "../styles.module.css";

type EntityProps = PropsWithChildren<{
  id: string;
  width: number;
  height: number;
  x?: number;
  y?: number;
}>;

type WaitingAreaProps = PropsWithChildren<{
  id: string;
  width: number;
  height: number;
  x: number;
  y: number;
}>;

type ConnectorProps = {
  step: number;
  linePath: string;
  arrowPath: string;
  textX: number;
  textY: number;
};

function Entity({ id, width, height, x, y, children }: EntityProps) {
  return (
    <>
      <rect
        id={`${id}-bg`}
        width={width}
        height={height}
        x={x}
        y={y}
        fill="none"
        stroke="currentcolor"
        strokeWidth={2}
        pointerEvents="all"
        rx="24"
        ry="24"
      />
      <switch>
        <foreignObject
          width={width}
          height={height}
          x={x}
          y={y}
          requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
        >
          <span
            id={`${id}-text`}
            className="grid h-full w-full place-items-center overflow-auto p-[8px] text-center font-[Helvetica] text-[16px] text-current"
          >
            {children}
          </span>
        </foreignObject>
      </switch>
    </>
  );
}

function WaitingArea({ id, width, height, x, y, children }: WaitingAreaProps) {
  return (
    <>
      <rect
        id={`${id}-bg`}
        width={width}
        height={height}
        x={x}
        y={y}
        fill="none"
        stroke="currentcolor"
        strokeWidth={2}
        pointerEvents="all"
        rx="4"
        ry="4"
      />
      <switch>
        <foreignObject
          width={width}
          height={height}
          x={x}
          y={y}
          requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
        >
          <span
            id={`${id}-text`}
            className="grid h-full w-full place-items-center overflow-auto p-[8px] text-center font-[Helvetica] text-[16px] text-current"
          >
            {children}
          </span>
        </foreignObject>
      </switch>
    </>
  );
}

function Connector({
  step,
  linePath,
  arrowPath,
  textX,
  textY,
}: ConnectorProps) {
  return (
    <>
      <path
        id={`step-${step}-line`}
        fill="none"
        stroke="currentcolor"
        strokeMiterlimit="10"
        d={linePath}
        pointerEvents="stroke"
      />
      <path
        id={`step-${step}-arrow`}
        fill="currentcolor"
        stroke="currentcolor"
        strokeMiterlimit="10"
        d={arrowPath}
        pointerEvents="all"
      />
      <text
        id={`step-${step}-text`}
        x={textX}
        y={textY}
        fontFamily="Helvetica"
        fontSize="24"
        fontWeight="bold"
        textAnchor="middle"
        fill="currentcolor"
      >
        {step}
      </text>
    </>
  );
}

function Entities() {
  const { t: tSecondHandVehicleInstructions } = useTranslation(
    "instructions-vehicle-transaction-2nd-hand-page",
  );

  const renderEntities = useCallback(() => {
    const entities: Array<EntityProps> = [
      {
        id: "door",
        width: 80,
        height: 160,
        y: 760,
        children: tSecondHandVehicleInstructions(
          "registration.diagram.labels.door",
        ),
      },
      {
        id: "ticket-officer",
        width: 120,
        height: 120,
        x: 160,
        y: 560,
        children: tSecondHandVehicleInstructions(
          "registration.diagram.labels.ticketOfficer",
        ),
      },
      {
        id: "taxing-section",
        width: 160,
        height: 240,
        x: 600,
        y: 240,
        children: tSecondHandVehicleInstructions(
          "registration.diagram.labels.taxingSection",
        ),
      },
      {
        id: "inance-section",
        width: 160,
        height: 200,
        x: 600,
        children: tSecondHandVehicleInstructions(
          "registration.diagram.labels.financeSection",
        ),
      },
      {
        id: "delivery-section",
        width: 160,
        height: 480,
        children: tSecondHandVehicleInstructions(
          "registration.diagram.labels.deliverySection",
        ),
      },
    ];

    return entities.map((entity) => <Entity key={entity.id} {...entity} />);
  }, [tSecondHandVehicleInstructions]);

  return renderEntities();
}

function WaitingAreas() {
  const { t: tSecondHandVehicleInstructions } = useTranslation(
    "instructions-vehicle-transaction-2nd-hand-page",
  );

  const renderWaitingAreas = useCallback(() => {
    const areas: Array<WaitingAreaProps> = [
      {
        id: "taxing-waiting-area",
        width: 280,
        height: 140,
        x: 240,
        y: 340,
        children: tSecondHandVehicleInstructions(
          "registration.diagram.labels.taxingWaitingArea",
        ),
      },
      {
        id: "finance-waiting-area",
        width: 280,
        height: 140,
        x: 240,
        y: 170,
        children: tSecondHandVehicleInstructions(
          "registration.diagram.labels.financeWaitingArea",
        ),
      },
      {
        id: "delivery-waiting-area",
        width: 280,
        height: 140,
        x: 240,
        y: 0,
        children: tSecondHandVehicleInstructions(
          "registration.diagram.labels.deliveryWaitingArea",
        ),
      },
    ];

    return areas.map((area) => <WaitingArea key={area.id} {...area} />);
  }, [tSecondHandVehicleInstructions]);

  return renderWaitingAreas();
}

function Connectors() {
  const renderConnectors = useCallback(() => {
    const connectors: Array<ConnectorProps> = [
      {
        step: 1,
        linePath: "M80 840h130q10 0 10-10V686.37",
        arrowPath: "m220 681.12 3.5 7-3.5-1.75-3.5 1.75Z",
        textX: 142,
        textY: 828,
      },
      {
        step: 2,
        linePath: "M220 560v-10q0-10 10-10h140q10 0 10-10v-43.63",
        arrowPath: "m380 481.12 3.5 7-3.5-1.75-3.5 1.75Z",
        textX: 301,
        textY: 529,
      },
      {
        step: 3,
        linePath: "M520 410h73.63",
        arrowPath: "m598.88 410-7 3.5 1.75-3.5-1.75-3.5Z",
        textX: 535,
        textY: 401,
      },
      {
        step: 4,
        linePath: "M680 480v130q0 10-10 10H286.37",
        arrowPath: "m281.12 620 7-3.5-1.75 3.5 1.75 3.5Z",
        textX: 666,
        textY: 559,
      },
      {
        step: 5,
        linePath: "M280 590h270q10 0 10-10V285q0-10-10-10h-23.63",
        arrowPath: "m521.12 275 7-3.5-1.75 3.5 1.75 3.5Z",
        textX: 421,
        textY: 581,
      },
      {
        step: 6,
        linePath: "M520 240h30q10 0 10-10V110q0-10 10-10h23.63",
        arrowPath: "m598.88 100-7 3.5 1.75-3.5-1.75-3.5Z",
        textX: 546,
        textY: 178,
      },
      {
        step: 7,
        linePath: "M760 100h10q10 0 10 10v530q0 10-10 10H286.37",
        arrowPath: "m281.12 650 7-3.5-1.75 3.5 1.75 3.5Z",
        textX: 793,
        textY: 398,
      },
      {
        step: 8,
        linePath: "M190 560V115q0-10 10-10h33.63",
        arrowPath: "m238.88 105-7 3.5 1.75-3.5-1.75-3.5Z",
        textX: 202,
        textY: 358,
      },
      {
        step: 9,
        linePath: "M240 70h-73.63",
        arrowPath: "m161.12 70 7-3.5-1.75 3.5 1.75 3.5Z",
        textX: 202,
        textY: 60,
      },
      {
        step: 10,
        linePath: "M40 480v273.63",
        arrowPath: "m40 758.88-3.5-7 3.5 1.75 3.5-1.75Z",
        textX: 20,
        textY: 640,
      },
    ];

    return connectors.map((connector) => (
      <Connector key={String(connector.step)} {...connector} />
    ));
  }, []);

  return renderConnectors();
}

function RegistrarDiagram() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      viewBox="-1 -1 801 922"
      aria-hidden={true}
      className="w-[min(590px,100%)]"
    >
      <Entities />
      <WaitingAreas />
      <Connectors />
    </svg>
  );
}

export function RegistrationSteps() {
  return (
    <>
      <TypedTrans
        ns="instructions-vehicle-transaction-2nd-hand-page"
        i18nKey="registration.instructions.description"
        components={{
          p: <p className="mt-4" />,
        }}
      />
      <div className="mb-3 mt-2 flex flex-col gap-3">
        <div className="flex gap-2">
          <Checkbox
            id="purchase-registration-requirement-1"
            name="registration"
            value="requirement-1"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-page"
            i18nKey="registration.instructions.requirement1"
            components={{
              label: (
                <label
                  htmlFor="purchase-registration-requirement-1"
                  className="hover:cursor-pointer"
                />
              ),
              DeedsOfSale: <TechnicalTerm name="deedOfSale" count={2} />,
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="purchase-registration-requirement-2"
            name="registration"
            value="requirement-2"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-page"
            i18nKey="registration.instructions.requirement2"
            components={{
              label: (
                <label
                  htmlFor="purchase-registration-requirement-2"
                  className="hover:cursor-pointer"
                />
              ),
              ProofOfIdentity: <TechnicalTerm name="proofOfIdentity" />,
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="purchase-registration-requirement-3"
            name="registration"
            value="requirement-3"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-page"
            i18nKey="registration.instructions.requirement3"
            components={{
              label: (
                <label
                  htmlFor="purchase-registration-requirement-3"
                  className="hover:cursor-pointer"
                />
              ),
              VehicleRegistrationBook: (
                <TechnicalTerm name="vehicleRegistrationBook" />
              ),
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="purchase-registration-requirement-4"
            name="registration"
            value="requirement-4"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-page"
            i18nKey="registration.instructions.requirement4"
            components={{
              label: (
                <label
                  htmlFor="purchase-registration-requirement-4"
                  className="hover:cursor-pointer"
                />
              ),
              NonAttachmentCertificate: (
                <TechnicalTerm name="nonAttachmentCertificate" />
              ),
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="purchase-registration-requirement-5"
            name="registration"
            value="requirement-5"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-page"
            i18nKey="registration.instructions.requirement5"
            components={{
              label: (
                <label
                  htmlFor="purchase-registration-requirement-5"
                  className="hover:cursor-pointer"
                />
              ),
              GovtRegFeeLink: (
                <Link
                  href="https://mof.govmu.org/Documents/Legislations/Economic%20and%20Financial%20Measures%20%28Miscellaneous%20Provisions%29%20Act%202012%20-%20Fourth%20Schedule.pdf"
                  target="_blank"
                  rel="noreferrer noopener nofollow"
                  className="rounded font-bold focus:ring-0 focus:ring-offset-0 focus-visible:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-4 focus-visible:ring-offset-white dark:focus-visible:ring-blue-500 focus-visible:dark:ring-offset-slate-900"
                />
              ),
              MyCarMuRegFeeCalculatorLink: (
                <Link
                  href="https://www.mycar.mu/blog/vehicle-registration-fee-calculator"
                  target="_blank"
                  rel="noreferrer noopener nofollow"
                  className="rounded font-bold focus:ring-0 focus:ring-offset-0 focus-visible:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-4 focus-visible:ring-offset-white dark:focus-visible:ring-blue-500 focus-visible:dark:ring-offset-slate-900"
                />
              ),
            }}
          />
        </div>
      </div>

      <TypedTrans
        ns="instructions-vehicle-transaction-2nd-hand-page"
        i18nKey="registration.diagram.description"
        components={{
          p: <p className="my-4" aria-hidden={true} />,
        }}
      />
      <RegistrarDiagram />
      <ol className="mt-4 flex list-decimal flex-col gap-2 ps-6 leading-8">
        <TypedTrans
          ns="instructions-vehicle-transaction-2nd-hand-page"
          i18nKey="registration.diagram.legend.step1"
          components={{
            li: <li className="marker:font-bold" />,
            VehicleRegistrationBook: (
              <TechnicalTerm name="vehicleRegistrationBook" />
            ),
          }}
        />
        <TypedTrans
          ns="instructions-vehicle-transaction-2nd-hand-page"
          i18nKey="registration.diagram.legend.step2"
          components={{
            li: <li className="marker:font-bold" />,
          }}
        />
        <TypedTrans
          ns="instructions-vehicle-transaction-2nd-hand-page"
          i18nKey="registration.diagram.legend.step3"
          components={{
            li: <li className="marker:font-bold" />,
          }}
        />
        <TypedTrans
          ns="instructions-vehicle-transaction-2nd-hand-page"
          i18nKey="registration.diagram.legend.step4"
          components={{
            li: <li className="marker:font-bold" />,
          }}
        />
        <TypedTrans
          ns="instructions-vehicle-transaction-2nd-hand-page"
          i18nKey="registration.diagram.legend.step5"
          components={{
            li: <li className="marker:font-bold" />,
          }}
        />
        <TypedTrans
          ns="instructions-vehicle-transaction-2nd-hand-page"
          i18nKey="registration.diagram.legend.step6"
          components={{
            li: <li className="marker:font-bold" />,
          }}
        />
        <TypedTrans
          ns="instructions-vehicle-transaction-2nd-hand-page"
          i18nKey="registration.diagram.legend.step7"
          components={{
            li: <li className="marker:font-bold" />,
          }}
        />
        <TypedTrans
          ns="instructions-vehicle-transaction-2nd-hand-page"
          i18nKey="registration.diagram.legend.step8"
          components={{
            li: <li className="marker:font-bold" />,
          }}
        />
        <TypedTrans
          ns="instructions-vehicle-transaction-2nd-hand-page"
          i18nKey="registration.diagram.legend.step9"
          components={{
            li: <li className="marker:font-bold" />,
            em: <em className="font-bold" />,
            DeedOfSale: <TechnicalTerm name="deedOfSale" count={1} />,
          }}
        />
        <TypedTrans
          ns="instructions-vehicle-transaction-2nd-hand-page"
          i18nKey="registration.diagram.legend.step10"
          components={{
            li: <li className="marker:font-bold" />,
          }}
        />
      </ol>
    </>
  );
}
