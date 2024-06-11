import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import ButtonTertiary from "../../buttons/ButtonTertiary";
import SVGpdfDownload from "../../SVGs/INFO/SVGpdfDownload";
import SVGpdf from "../../SVGs/INFO/SVGpdf";
import { Cnpj } from "../../../API/API_utils";

(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

interface PDFInterface {
  cnpj: Cnpj;
}

const PDFComponent: React.FC<PDFInterface> = ({ cnpj }) => {
  const generatePDF = () => {
    const hearderBorder = [false, true, false, false];
    const cellBorder = [false];
    const marginEnd = [0, 4, 0, 12];
    const docDefinition = {
      //ESTILOS DO PDF ---------------------------------------------------
      styles: {
        // ESTILO DO CABECALHO
        header: {
          fontSize: 18,
          bold: true,
          margin: Number([0, 0, 10, 0]),
        },

        // ESTILO DO TEXTO PERSONALIZADO
        customText: {
          fontSize: 12,
          color: "#333",
        },

        bold: {
          bold: true,
        },

        // ESTILO DOS TITULOS DA TABELA
        headerCell: {
          fontSize: 11,
          bold: true,
          marginTop: 10,
          marginBottom: 5,
          color: "#6e6e6e",
        },

        // ESTILO DAS CELULAS DA TABELA
        cellStyle: {
          fontSize: 10,
          color: "#333",
          marginTop: 4,
          marginBottom: 4,
        },
      },

      content: [
        { text: "Proposta Comercial", style: "header" },
        "Outro conteúdo aqui...",
        { text: "Texto personalizado", style: "customText" },
        //  TABELAS DE INFORMAÇÃO DO ---- CLIENTE -----
        {
          // TABELA 01
          table: {
            widths: [200, "*", "*"],
            body: [
              // 01.Header row:
              [
                {
                  text: "Cliente",
                  style: "headerCell",
                  border: hearderBorder,
                },
                {
                  text: "Contatos",
                  style: "headerCell",
                  border: hearderBorder,
                },
                {
                  text: "Informações",
                  style: "headerCell",
                  border: hearderBorder,
                },
              ],

              // 01.Primeira Linha:
              [
                {
                  text: [
                    { text: "Empresa: ", style: "bold" },
                    `${cnpj.razaoSocial}`,
                  ],
                  style: "cellStyle",
                  border: cellBorder,
                },
                {
                  text: [
                    { text: "1 Telefone: ", style: "bold" },
                    `${cnpj.phone1}`,
                  ],
                  style: "cellStyle",
                  border: cellBorder,
                },
                {
                  text: [
                    { text: "Status da venda: ", style: "bold" },
                    `${
                      cnpj.status === 1
                        ? "Pendente"
                        : cnpj.status === 2
                        ? "Confirmado"
                        : cnpj.status === 3
                        ? "Suspenso"
                        : cnpj.status === 4
                        ? "Rejeitado"
                        : "Sem status"
                    }`,
                  ],
                  style: "cellStyle",
                  border: cellBorder,
                },
              ],

              // 01.Segunda Linha:
              [
                {
                  text: [
                    { text: "Cliente: ", style: "bold" },
                    `${cnpj.clientName}`,
                  ],
                  style: "cellStyle",
                  border: cellBorder,
                },
                {
                  text: [
                    { text: "2 Telefone: ", style: "bold" },
                    `${cnpj.phone2}`,
                  ],
                  style: "cellStyle",
                  border: cellBorder,
                },
                {
                  text: [
                    { text: "Proxima ligação: ", style: "bold" },
                    `${cnpj.dateForCall}`,
                  ],
                  style: "cellStyle",
                  border: cellBorder,
                },
              ],

              // 01.Terceira Linha:
              [
                {
                  text: [{ text: "Cnpj: ", style: "bold" }, `${cnpj.cnpj}`],
                  style: "cellStyle",
                  border: cellBorder,
                  margin: marginEnd,
                },
                {
                  text: [{ text: "Email: ", style: "bold" }, `${cnpj.email}`],
                  style: "cellStyle",
                  border: cellBorder,
                  margin: marginEnd,
                },
                {
                  text: ``,
                  style: "cellStyle",
                  border: cellBorder,
                  margin: marginEnd,
                },
              ],
            ],
            style: "tableStyle",
          },
        },
        {
          // TABELA 02
          table: {
            widths: ["*"],
            body: [
              // 02.Header row:
              [
                {
                  text: "Sobre",
                  style: "headerCell",
                  alignment: "center",
                  border: hearderBorder,
                },
              ],

              // 02.Primeira Linha:
              [
                {
                  text: [
                    { text: "Atividade principal: ", style: "bold" },
                    `${cnpj.activity}`,
                  ],
                  style: "cellStyle",
                  border: cellBorder,
                  margin: marginEnd,
                },
              ],
            ],
            style: "tableStyle",
          },
        },
        {
          // HEADER VEICULOS
          table: {
            widths: ["*"],
            body: [
              [
                {
                  text: "Veiculos",
                  style: "headerCell",
                  border: hearderBorder,
                  alignment: "center",
                },
              ],
            ],
            style: "tableStyle",
          },
        },
        /* {
          //  TABELAS DE INFORMAÇÃO DO ---- VEICULO ----- MARCA, MODELO, VERSÃO
         table: {
            widths: ["*", "*", "*"],
            body: cnpj.veiculos.map((veiculo) => {
              const arr = [];
              const info_1 = {
                text: [{ text: "Marca: ", style: "bold" }, `${veiculo.marca}`],
                style: "cellStyle",
                border: cellBorder,
              };
              const info_2 = {
                text: [
                  { text: "Modelo: ", style: "bold" },
                  `${veiculo.modelo}`,
                ],
                style: "cellStyle",
                border: cellBorder,
              };
              const info_3 = {
                text: [
                  { text: "Versão: ", style: "bold" },
                  `${veiculo.versao}`,
                ],
                style: "cellStyle",
                border: cellBorder,
              };

              arr.push(info_1);
              arr.push(info_2);
              arr.push(info_3);

              return arr;
            }),
            style: "tableStyle",
          },
        },
        {
          //  TABELAS DE INFORMAÇÃO DO ---- VEICULO ----- QUANTIDADE, PRAZO, TIPO DE COMPRA
          table: {
            widths: ["*", "*", "*"],
            body: cnpj.veiculos.map((veiculo) => {
              const arr = [];
              const info_1 = {
                text: [
                  { text: "Quantidade: ", style: "bold" },
                  `${veiculo.quantidade}`,
                ],
                style: "cellStyle",
                border: cellBorder,
              };
              const info_2 = {
                text: [{ text: "Prazo: ", style: "bold" }, `${veiculo.prazo}`],
                style: "cellStyle",
                border: cellBorder,
              };
              const info_3 = {
                text: [
                  { text: "Tipo de compra: ", style: "bold" },
                  `${veiculo.tipo_de_compra}`,
                ],
                style: "cellStyle",
                border: cellBorder,
              };

              arr.push(info_1);
              arr.push(info_2);
              arr.push(info_3);

              return arr;
            }),
            style: "tableStyle",
          },
        },*/
      ],
    };

    const openPdf = () => {
      pdfMake.createPdf(docDefinition).open();
    };

    const downloadPdf = () => {
      pdfMake
        .createPdf(docDefinition)
        .download(`Proposta_${cnpj.razaoSocial}.pdf`);
    };

    return { openPdf, downloadPdf };
  };

  const { openPdf, downloadPdf } = generatePDF();

  // FUNCAO QUE ABRE OU BAIXA O PDF ------ BOTÕES
  return (
    <div className="flex flex-row">
      <div className="px-1">
        <ButtonTertiary
          onClick={openPdf}
          className={`flex flex-row items-center border-transparent text-text hover:border-secondary hover:bg-primary font-oswald p-1 bg-blue-500`}
        >
          <>
            <p className="mx-1 hidden md:block">Ver PDF</p>
            <SVGpdf
              width={20}
              height={20}
              fill_one="none"
              fill_two="currentColor"
            />
          </>
        </ButtonTertiary>
      </div>

      <ButtonTertiary
        onClick={downloadPdf}
        className={`flex flex-row items-center border-transparent text-text hover:border-secondary hover:bg-primary font-oswald p-1 bg-violet-700`}
      >
        <>
          <p className="mx-1 hidden md:block">Download</p>
          <SVGpdfDownload
            width={20}
            height={20}
            fill_one="none"
            fill_two="currentColor"
          />
        </>
      </ButtonTertiary>
    </div>
  );
};
export default PDFComponent;
