export default function DocGenVehicleStyles() {
  return (
    <style jsx global>{`
      @page {
        size: A4 portrait;
        margin: 0;
      }

      @-moz-document url-prefix() {
        @page {
          /* (size: A4 portrait) adds an extra page on firefox */
          size: unset;
        }
      }

      :root {
        --font-size: 12pt;

        display: grid;
        min-block-size: 100vh;
      }

      body {
        margin-inline: auto;
        margin-block: auto;
        padding-inline: 1rem;
        padding-block: 1rem;
        background-color: var(--print-preview-backdrop-bg);
        overflow-x: hidden;
      }

      .date-picker-container > .w-full > .relative > .absolute {
        inset-inline-start: auto;
        inset-inline-end: 0;
        padding-inline: 0.625rem;
      }

      @media print {
        :root {
          min-block-size: unset;
        }

        body {
          padding: 0;
        }

        main {
          border-radius: 0;
          box-shadow: none;
        }
      }
    `}</style>
  );
}
