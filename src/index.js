import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {Editor, EditorState} from 'draft-js';

class MyEditor extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {editorState: EditorState.createEmpty()};
    this.onChange = (editorState) => { 
      console.log(editorState.getCurrentContent());
      this.setState({editorState})
    }; 
    this.focus = () => this.editor.focus()
  }
  render() {
    return (
      <div className="editor" onClick={() => this.focus() }>
        <Editor ref={(editor) => this.editor = editor } editorState={this.state.editorState} onChange={this.onChange} />
      </div>
    );
  }
}

ReactDOM.render(
  <MyEditor />,
  document.getElementById('root')
);