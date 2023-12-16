import React from "react";


class Editor extends React.Component<any, any> {
    render() {
        return (
          <div>
              <label htmlFor="editor" className={`block`}>Email <span
                  className={`text-red-700`}>*</span></label>
              <input type="text" id="editor" className={`block border-2 outline-none focus:border-green-400 p-1 w-[500px]`}
                     placeholder="Email"/>
          </div>
        );
    }
}

export default Editor;
