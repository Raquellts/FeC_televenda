import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";
import ButtonTertiary from "../../buttons/ButtonTertiary";
import SVGpdf from "../../SVGs/INFO/SVGpdf";
import { CNPJInterface } from "../../../../InterfaceCNPJ";
import SVGpdfDownload from "../../SVGs/INFO/SVGpdfDownload";

(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

interface PDFInterface {
  cnpj: CNPJInterface;
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
                    `${cnpj.name_cnpj}`,
                  ],
                  style: "cellStyle",
                  border: cellBorder,
                },
                {
                  text: [
                    { text: "1 Telefone: ", style: "bold" },
                    `${cnpj.contact}`,
                  ],
                  style: "cellStyle",
                  border: cellBorder,
                },
                {
                  text: [
                    { text: "Status da venda: ", style: "bold" },
                    `${
                      cnpj.status === "PENDING"
                        ? "Pendente"
                        : cnpj.status === "APPROVED"
                        ? "Aprovado"
                        : cnpj.status === "REJECTED"
                        ? "Rejeitado"
                        : cnpj.status === "SUSPENDED"
                        ? "Suspenso"
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
                    `${cnpj.name_client}`,
                  ],
                  style: "cellStyle",
                  border: cellBorder,
                },
                {
                  text: [
                    { text: "2 Telefone: ", style: "bold" },
                    `${cnpj.contact}`,
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
                    `${cnpj.activity.toLowerCase()}`,
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
        {
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
        },
      ],
    };

    const openPdf = () => {
      pdfMake.createPdf(docDefinition).open();
    };

    const downloadPdf = () => {
      pdfMake
        .createPdf(docDefinition)
        .download(`Proposta_${cnpj.name_cnpj}.pdf`);
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
          className={`flex flex-row items-center border-transparent bg-blue-500 text-text hover:border-secondary hover:bg-primary font-oswald p-1`}
        >
          <>
            <p className="mx-1 text-sm hidden md:block">VER PDF</p>
            <SVGpdf
              width={26}
              height={26}
              fill_one="none"
              fill_two="currentColor"
            />
          </>
        </ButtonTertiary>
      </div>

      <ButtonTertiary
        onClick={downloadPdf}
        className={`flex flex-row items-center border-transparent bg-violet-700 text-text hover:border-secondary hover:bg-primary font-oswald p-1`}
      >
        <>
          <p className="mx-1 text-sm hidden md:block">BAIXAR</p>
          <SVGpdfDownload
            width={26}
            height={26}
            fill_one="none"
            fill_two="currentColor"
          />
        </>
      </ButtonTertiary>
    </div>
  );
};
export default PDFComponent;
