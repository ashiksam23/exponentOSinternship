const fs = require("fs");
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  AlignmentType, BorderStyle, WidthType, ShadingType, HeadingLevel,
  Header, Footer, PageNumber, LevelFormat,
} = require("docx");

const PURPLE = "6C5CE7";
const LIGHT_PURPLE = "A29BFE";
const PALE_PURPLE = "F0EDFF";
const GOLD = "F9A825";
const DARK = "2D2D2D";
const GRAY = "666666";
const WHITE = "FFFFFF";
const LIGHT_GRAY = "F5F5F5";

const noBorder = { style: BorderStyle.NONE, size: 0 };
const noBorders = { top: noBorder, bottom: noBorder, left: noBorder, right: noBorder };
const thinBorder = { style: BorderStyle.SINGLE, size: 1, color: "DDDDDD" };
const thinBorders = { top: thinBorder, bottom: thinBorder, left: thinBorder, right: thinBorder };

const doc = new Document({
  styles: {
    default: {
      document: { run: { font: "Arial", size: 20, color: DARK } },
    },
  },
  numbering: {
    config: [
      {
        reference: "checkmarks",
        levels: [{
          level: 0,
          format: LevelFormat.BULLET,
          text: "\u2713",
          alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 360, hanging: 360 } } },
        }],
      },
      {
        reference: "bullets",
        levels: [{
          level: 0,
          format: LevelFormat.BULLET,
          text: "\u2022",
          alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 360, hanging: 360 } } },
        }],
      },
    ],
  },
  sections: [
    {
      properties: {
        page: {
          size: { width: 12240, height: 15840 },
          margin: { top: 720, right: 900, bottom: 720, left: 900 },
        },
      },
      children: [
        // === HEADER BANNER ===
        new Table({
          width: { size: 10440, type: WidthType.DXA },
          columnWidths: [10440],
          rows: [
            new TableRow({
              children: [
                new TableCell({
                  borders: noBorders,
                  width: { size: 10440, type: WidthType.DXA },
                  shading: { fill: PURPLE, type: ShadingType.CLEAR },
                  margins: { top: 300, bottom: 300, left: 400, right: 400 },
                  children: [
                    new Paragraph({
                      alignment: AlignmentType.CENTER,
                      spacing: { after: 80 },
                      children: [
                        new TextRun({ text: "ExponentOS", font: "Arial", size: 44, bold: true, color: WHITE }),
                      ],
                    }),
                    new Paragraph({
                      alignment: AlignmentType.CENTER,
                      spacing: { after: 60 },
                      children: [
                        new TextRun({ text: "AI Internship Program", font: "Arial", size: 28, color: "FFEAA7" }),
                      ],
                    }),
                    new Paragraph({
                      alignment: AlignmentType.CENTER,
                      children: [
                        new TextRun({ text: "Build.  Play.  Learn.", font: "Arial", size: 22, italics: true, color: "E0D4FF" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),

        new Paragraph({ spacing: { after: 200 } }),

        // === WHAT IS EXPONENTOS ===
        new Paragraph({
          spacing: { after: 100 },
          children: [
            new TextRun({ text: "What is ExponentOS?", size: 26, bold: true, color: PURPLE }),
          ],
        }),
        new Paragraph({
          spacing: { after: 200 },
          children: [
            new TextRun({ text: "ExponentOS is a ", size: 20, color: GRAY }),
            new TextRun({ text: "free, fully remote, 4-week AI internship", size: 20, bold: true, color: DARK }),
            new TextRun({ text: " for teenagers aged 15\u201318 with zero prior coding experience. In 20 sessions, interns go from \u201CWhat is AI?\u201D to building and publishing their own AI-powered projects in a public portfolio.", size: 20, color: GRAY }),
          ],
        }),

        // === PROGRAM AT A GLANCE TABLE ===
        new Table({
          width: { size: 10440, type: WidthType.DXA },
          columnWidths: [1740, 1740, 1740, 1740, 1740, 1740],
          rows: [
            new TableRow({
              children: [
                makeGlanceCell("Duration", "4 Weeks"),
                makeGlanceCell("Schedule", "Mon\u2013Fri"),
                makeGlanceCell("Daily Time", "3 Hours"),
                makeGlanceCell("Format", "Remote"),
                makeGlanceCell("Ages", "15\u201318"),
                makeGlanceCell("Cost", "Free"),
              ],
            }),
          ],
        }),

        new Paragraph({ spacing: { after: 200 } }),

        // === THE 4-WEEK JOURNEY ===
        new Paragraph({
          spacing: { after: 100 },
          children: [
            new TextRun({ text: "The 4-Week Journey", size: 26, bold: true, color: PURPLE }),
          ],
        }),

        new Table({
          width: { size: 10440, type: WidthType.DXA },
          columnWidths: [1200, 2200, 3520, 3520],
          rows: [
            makeJourneyHeader(),
            makeJourneyRow("Week 1", "AI Explorer", "Prompt engineering, AI art, storytelling", "AI Exploration Journal", PALE_PURPLE),
            makeJourneyRow("Week 2", "AI Builder", "No-code chatbots & AI-powered tools", "Working Chatbot + AI Tool", WHITE),
            makeJourneyRow("Week 3", "Code Starter", "Python fundamentals through fun projects", "Python Project", PALE_PURPLE),
            makeJourneyRow("Week 4", "AI Creator", "Python + AI APIs, capstone & portfolio", "AI App + Portfolio Site", WHITE),
          ],
        }),

        new Paragraph({ spacing: { after: 200 } }),

        // === TWO COLUMN SECTION: What They Learn + What They Get ===
        new Table({
          width: { size: 10440, type: WidthType.DXA },
          columnWidths: [5100, 340, 5000],
          rows: [
            new TableRow({
              children: [
                // LEFT: What They Learn
                new TableCell({
                  borders: noBorders,
                  width: { size: 5100, type: WidthType.DXA },
                  children: [
                    new Paragraph({
                      spacing: { after: 100 },
                      children: [
                        new TextRun({ text: "What They Learn", size: 24, bold: true, color: PURPLE }),
                      ],
                    }),
                    makeBullet("Prompt engineering & AI literacy"),
                    makeBullet("Building AI apps without code"),
                    makeBullet("Python programming from scratch"),
                    makeBullet("Working with AI APIs (Google Gemini)"),
                    makeBullet("Code review & collaboration"),
                    makeBullet("Portfolio building & self-presentation"),
                    makeBullet("AI ethics, bias & responsible use"),
                  ],
                }),
                // SPACER
                new TableCell({
                  borders: noBorders,
                  width: { size: 340, type: WidthType.DXA },
                  children: [new Paragraph("")],
                }),
                // RIGHT: What They Walk Away With
                new TableCell({
                  borders: noBorders,
                  width: { size: 5000, type: WidthType.DXA },
                  children: [
                    new Paragraph({
                      spacing: { after: 100 },
                      children: [
                        new TextRun({ text: "What They Walk Away With", size: 24, bold: true, color: PURPLE }),
                      ],
                    }),
                    makeCheck("Public portfolio on GitHub Pages"),
                    makeCheck("5 completed AI projects"),
                    makeCheck("Working knowledge of Python"),
                    makeCheck("Hands-on AI API experience"),
                    makeCheck("Badges, XP & certificate of completion"),
                    makeCheck("Confidence to keep building"),
                    makeCheck("A community of fellow builders"),
                  ],
                }),
              ],
            }),
          ],
        }),

        new Paragraph({ spacing: { after: 200 } }),

        // === DAILY SESSION FLOW ===
        new Paragraph({
          spacing: { after: 100 },
          children: [
            new TextRun({ text: "Every Session Follows This Flow", size: 26, bold: true, color: PURPLE }),
          ],
        }),

        new Table({
          width: { size: 10440, type: WidthType.DXA },
          columnWidths: [2088, 2088, 2088, 2088, 2088],
          rows: [
            new TableRow({
              children: [
                makeFlowCell("Kickoff", "10 min", "Recap & warm-up"),
                makeFlowCell("Learn", "40 min", "Live demos & concepts"),
                makeFlowCell("Build", "50 min", "Hands-on projects"),
                makeFlowCell("Play", "40 min", "Challenges & games"),
                makeFlowCell("Share", "20 min", "Show work & shout-outs"),
              ],
            }),
          ],
        }),

        new Paragraph({ spacing: { after: 200 } }),

        // === GAMIFICATION BAR ===
        new Table({
          width: { size: 10440, type: WidthType.DXA },
          columnWidths: [10440],
          rows: [
            new TableRow({
              children: [
                new TableCell({
                  borders: noBorders,
                  width: { size: 10440, type: WidthType.DXA },
                  shading: { fill: PALE_PURPLE, type: ShadingType.CLEAR },
                  margins: { top: 150, bottom: 150, left: 300, right: 300 },
                  children: [
                    new Paragraph({
                      alignment: AlignmentType.CENTER,
                      children: [
                        new TextRun({ text: "Gamified Experience:  ", size: 20, bold: true, color: PURPLE }),
                        new TextRun({ text: "XP Points  \u2022  30+ Badges  \u2022  Leaderboard  \u2022  Weekly Demo Days  \u2022  Titles: ", size: 20, color: GRAY }),
                        new TextRun({ text: "Apprentice \u2192 Builder \u2192 Hacker \u2192 AI Creator", size: 20, bold: true, color: PURPLE }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),

        new Paragraph({ spacing: { after: 200 } }),

        // === TOOLS (ALL FREE) ===
        new Paragraph({
          spacing: { after: 60 },
          children: [
            new TextRun({ text: "Tools Used ", size: 22, bold: true, color: PURPLE }),
            new TextRun({ text: "(all free)", size: 20, color: GRAY }),
          ],
        }),
        new Paragraph({
          spacing: { after: 100 },
          children: [
            new TextRun({ text: "ChatGPT  \u2022  Google Gemini  \u2022  Copilot  \u2022  Ideogram  \u2022  Coze  \u2022  Canva AI  \u2022  Replit  \u2022  GitHub Pages  \u2022  Google Sheets", size: 18, color: GRAY }),
          ],
        }),

        // === FOOTER BANNER ===
        new Table({
          width: { size: 10440, type: WidthType.DXA },
          columnWidths: [10440],
          rows: [
            new TableRow({
              children: [
                new TableCell({
                  borders: noBorders,
                  width: { size: 10440, type: WidthType.DXA },
                  shading: { fill: DARK, type: ShadingType.CLEAR },
                  margins: { top: 200, bottom: 200, left: 400, right: 400 },
                  children: [
                    new Paragraph({
                      alignment: AlignmentType.CENTER,
                      children: [
                        new TextRun({ text: "ExponentOS", size: 22, bold: true, color: LIGHT_PURPLE }),
                        new TextRun({ text: "  \u2014  Turning curious teenagers into AI builders, one project at a time.", size: 20, color: "AAAAAA" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    },
  ],
});

// === HELPER FUNCTIONS ===

function makeGlanceCell(label, value) {
  return new TableCell({
    borders: noBorders,
    width: { size: 1740, type: WidthType.DXA },
    shading: { fill: PALE_PURPLE, type: ShadingType.CLEAR },
    margins: { top: 100, bottom: 100, left: 80, right: 80 },
    children: [
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 40 },
        children: [new TextRun({ text: label, size: 16, color: GRAY })],
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [new TextRun({ text: value, size: 22, bold: true, color: PURPLE })],
      }),
    ],
  });
}

function makeJourneyHeader() {
  return new TableRow({
    children: [
      makeHeaderCell("Week", 1200),
      makeHeaderCell("Theme", 2200),
      makeHeaderCell("What You Learn", 3520),
      makeHeaderCell("What You Build", 3520),
    ],
  });
}

function makeHeaderCell(text, width) {
  return new TableCell({
    borders: thinBorders,
    width: { size: width, type: WidthType.DXA },
    shading: { fill: PURPLE, type: ShadingType.CLEAR },
    margins: { top: 60, bottom: 60, left: 100, right: 100 },
    children: [
      new Paragraph({
        children: [new TextRun({ text, size: 18, bold: true, color: WHITE })],
      }),
    ],
  });
}

function makeJourneyRow(week, theme, learn, build, fill) {
  const cells = [
    { text: week, width: 1200, bold: true },
    { text: theme, width: 2200, bold: true, color: PURPLE },
    { text: learn, width: 3520 },
    { text: build, width: 3520 },
  ];
  return new TableRow({
    children: cells.map(c =>
      new TableCell({
        borders: thinBorders,
        width: { size: c.width, type: WidthType.DXA },
        shading: { fill, type: ShadingType.CLEAR },
        margins: { top: 60, bottom: 60, left: 100, right: 100 },
        children: [
          new Paragraph({
            children: [new TextRun({ text: c.text, size: 18, bold: c.bold || false, color: c.color || DARK })],
          }),
        ],
      })
    ),
  });
}

function makeFlowCell(title, time, desc) {
  return new TableCell({
    borders: noBorders,
    width: { size: 2088, type: WidthType.DXA },
    shading: { fill: PURPLE, type: ShadingType.CLEAR },
    margins: { top: 100, bottom: 100, left: 80, right: 80 },
    children: [
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 20 },
        children: [new TextRun({ text: title, size: 20, bold: true, color: WHITE })],
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 20 },
        children: [new TextRun({ text: time, size: 16, color: "FFEAA7" })],
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [new TextRun({ text: desc, size: 16, italics: true, color: "E0D4FF" })],
      }),
    ],
  });
}

function makeBullet(text) {
  return new Paragraph({
    numbering: { reference: "bullets", level: 0 },
    spacing: { after: 40 },
    children: [new TextRun({ text, size: 19, color: GRAY })],
  });
}

function makeCheck(text) {
  return new Paragraph({
    numbering: { reference: "checkmarks", level: 0 },
    spacing: { after: 40 },
    children: [new TextRun({ text, size: 19, color: GRAY })],
  });
}

// === GENERATE ===
Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync("/Users/ashikthomas/Internship/ExponentOS-One-Pager.docx", buffer);
  console.log("One-pager created: ExponentOS-One-Pager.docx");
});
