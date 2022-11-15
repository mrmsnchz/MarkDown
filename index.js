import React, { useState } from "https://cdn.skypack.dev/react@17.0.2";
import ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.2";


function Editor({ inputText }) {
 marked.setOptions({
  highlight: null,
  pedantic: false,
  gfm: true,
  breaks: false,
  sanitize: false,
  xhtml: false
});

  return (
    <div className="input">
      <textarea id="editor" value={inputText.in}
        onChange={e => inputText.setIn(e.target.value)} />
    </div>
  );
}

function Preview({ outPutText }) {
  marked.setOptions({
    breaks: true
  })
  const html = {__html: marked(outPutText) };
  return (
    <div id="preview" dangerouslySetInnerHTML={html}>
    </div>
  );
}

function App() {
  const initialState = `
# Markdown 

## This is a Markdown Previewer yeah.

[I'm an inline-style link](https://www.google.com)

<dl>
<dt>Definition list etc.</dt>
<dd>Is something people use sometimes.</dd>
<dt>Here's another requirement</dt>
<dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>


\`Hey, inline code.\`
<br/>

\`\`\`
function exampleOf() {
  return multiLineCodeBlock;
  }  
\`\`\`
<br/>

- This
- is
- the
- list
- item
- blah
<br/>

>The blockquote element 
is used to indicate the quotation of a large section
of text from another source.<br/>

<br/>
And, this is a **bold text.**
<br/>

Oh! This is an image, I almost forgot.
<br/>
![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1") 
<br/>

`;
  const [inputText, setInputText] = useState(initialState);

  return (
    <div className="wrapper">
      <header className="header">
        Markdown Previewer
      </header>
      <main className="main">      
       <Editor inputText={{ in: inputText, setIn: setInputText }} />
        <Preview outPutText={inputText} />
      </main>
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById('root'));