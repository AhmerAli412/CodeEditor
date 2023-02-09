// import React, { useState } from "react";
// import AceEditor from "react-ace";

// import "ace-builds/src-noconflict/mode-javascript";
// import "ace-builds/src-noconflict/mode-html";
// import "ace-builds/src-noconflict/mode-css";
// import "ace-builds/src-noconflict/theme-monokai";

// const CodeEditor = () => {
//   const [htmlCode, setHtmlCode] = useState("<!-- Type your HTML code here -->");
//   const [cssCode, setCssCode] = useState("/* Type your CSS code here */");
//   const [jsCode, setJsCode] = useState("// Type your JavaScript code here");

//   return (
//     <div>
//       <AceEditor
//         mode="html"
//         theme="monokai"
//         onChange={setHtmlCode}
//         name="html-code-editor"
//         value={htmlCode}
//         editorProps={{ $blockScrolling: true }}
//       />
//       <AceEditor
//         mode="css"
//         theme="monokai"
//         onChange={setCssCode}
//         name="css-code-editor"
//         value={cssCode}
//         editorProps={{ $blockScrolling: true }}
//       />
//       <AceEditor
//         mode="javascript"
//         theme="monokai"
//         onChange={setJsCode}
//         name="javascript-code-editor"
//         value={jsCode}
//         editorProps={{ $blockScrolling: true }}
//       />
//       <div id="output">
//         <style>{cssCode}</style>
//         <div dangerouslySetInnerHTML={{ __html: htmlCode }} />
//         <script dangerouslySetInnerHTML={{ __html: jsCode }} />
//       </div>
//     </div>
//   );
// };

// export default CodeEditor;




















// import React, { useState } from 'react';
// import AceEditor from 'react-ace';
// import 'ace-builds/src-noconflict/mode-html';
// import 'ace-builds/src-noconflict/mode-css';
// import 'ace-builds/src-noconflict/mode-javascript';
// import 'ace-builds/src-noconflict/theme-monokai';

// const CodeEditor = () => {
//   const [htmlCode, setHtmlCode] = useState('<h1>Write your HTML here</h1>');
//   const [cssCode, setCssCode] = useState('h1 { color: blue; }');
//   const [jsCode, setJsCode] = useState('');

//   return (
//     <>
//     <div style={{ display: 'flex' }}>
//       <div style={{ flex: 1, padding: 10 }}>
//         <AceEditor
//           mode="html"
//           theme="monokai"
//           value={htmlCode}
//           onChange={setHtmlCode}
//           name="html-editor"
//           height="100%"
//           width="100%"
//         />
//       </div>
//       <div style={{ flex: 1, padding: 10 }}>
//         <AceEditor
//           mode="css"
//           theme="monokai"
//           value={cssCode}
//           onChange={setCssCode}
//           name="css-editor"
//           height="100%"
//           width="100%"
//         />
//       </div>
//       <div style={{ flex: 1, padding: 10 }}>
//         <AceEditor
//           mode="javascript"
//           theme="monokai"
//           value={jsCode}
//           onChange={setJsCode}
//           name="js-editor"
//           height="100%"
//           width="100%"
//         />
//       </div>
    
//       <div style={{padding: 10, background: '#333' }}>
//         <iframe
//           title="result"
//           srcDoc={`
//             <html>
//               <head>
//                 <style>
//                   ${cssCode}
//                 </style>
//               </head>
//               <body>
//                 ${htmlCode}
//                 <script>
//                   ${jsCode}
//                 </script>
//               </body>
//             </html>
//           `}
//           frameBorder="0"
//           height="100%"
//           width="100%"
//         />
//       </div>
//       </div>
    
//     </>
//   );
// };

// export default CodeEditor;



import React, { useState } from 'react';
import AceEditor from 'react-ace';
import './index.css'

import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/mode-css';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-github';

const CodeEditor = () => {
  const [html, setHtml] = useState(' <!-- Write typing your html -->');
  const [css, setCss] = useState('//write typing your css');
  const [js, setJs] = useState('');

  return (
    <div className="code-editor">
        <div className='bb'>
      <div className="code-container">
        <h1>HTML Code</h1>
        <AceEditor
          mode="html"
          theme="github"
          onChange={newValue => setHtml(newValue)}
          value={html}
        />
      </div>
      <div className="code-container">
        <h1>CSS Code</h1>
        <AceEditor
          mode="css"
          theme="github"
          onChange={newValue => setCss(newValue)}
          value={css}
        />
      </div>
      {/* <div className="code-container">
        <AceEditor
          mode="javascript"
          theme="github"
          onChange={newValue => setJs(newValue)}
          value={js}
        />
      </div> */}
      </div>
      <div className="preview-container">
        <iframe
          title="Preview"
          srcDoc={`
            <html>
              <head>
                <style>
                  ${css}
                </style>
              </head>
              <body>
                ${html}
               
              </body>
            </html>
          `}
        />
      </div>
    </div>
  );
};

export default CodeEditor;
