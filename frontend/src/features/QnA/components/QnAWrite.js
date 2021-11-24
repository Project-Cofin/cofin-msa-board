import React, {useState} from 'react'
import 'features/QnA/style/QnAWrite.css'
import styled from "styled-components"
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { LayOut } from "features/common";


function QnAWrite (){
    const [QnAContent, setQnAContent] = useState({
        title: '',
        content: ''
    })

    const [viewContent, setViewContent] = useState([]);

    const getValue = e => {
        const { name, value } = e.target;
        setQnAContent({
            ...QnAContent,
            [name]: value
        })
    };
    return(
    <LayOut>
        {viewContent.map(element => 
                        <div>
                            <h2>{element.title}</h2>
                            <div>
                                {element.content}
                            </div>
                        </div>)}
        <div>
            <Table border="1" width="1200" align="center">
                <tr>
                    <th colSpan="2">
                        QnA 글쓰기
                    </th>
                </tr>
                <tr>
                    <td width="50">
                        <select>                   
                            <option>질문</option>
                            <option>백신</option>
                            <option>코로나 확진</option>
                        </select>                        
                    </td>
                    
                </tr>
                <div className='form-wrapper'>
                    <input className="title-input" type='text' placeholder='제목'  onChange={getValue} name='title'/>
                    <CKEditor 
                    min-height= "500px"
                    editor={ClassicEditor}
                    data="<p></p>"
                    onReady={editor => {
                        console.log('Editor is ready to use!', editor);
                    }}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        console.log({ event, editor, data });
                        setQnAContent({
                            ...QnAContent,
                            content: data
                        })
                        console.log(QnAContent);
                    }}
                    onBlur={(event, editor) => {
                        console.log('Blur.', editor);
                    }}
                    onFocus={(event, editor) => {
                        console.log('Focus.', editor);
                    }}
                    />
                    <Button className="submit-button"
                    onClick={() => {
                        setViewContent(viewContent.concat({...QnAContent}));
                    }
                    }>입력</Button>
                </div>
                
                
            </Table>
        </div>
    </LayOut>
)}
            {/* <div class="note-editor note-frame car">
                <td>
                <Tool class="note-toolbar card-header" role="toolbar">
                    <div class="note-btn-group btn-group note-font">
                        <button type="button" class="note-btn btn btn-light btn-sm note-btn-strikethorough"
                        role="button" tabindex="-1" title aria-label="Strikethrough (CTRL+SHIFT+S)"
                        data-original-title="Strikethrough(CTRL+SHIFT+S)">
                            <i class="note-icon-strikethrough">::before == $0 </i>
                        </button>
                        <button type="button" class="note-btn btn btn-light btn-sm note-btn-superscript"
                        role="button" tabindex="-1" title aria-label="Superscript" data-original-title="Superscript">
                            <i class="note-icon-superscript">::before </i>
                        </button>
                        <button type="button" class="note-btn btn btn-light btn-sm note-btn-subscript"
                        role="button" tabindex="-1" title aria-label="Subscript" data-original-title="Subscript">
                            <i class="note-icon-subscript">::before </i>
                        </button>
                    </div>
                </Tool>
                <div class="note-editing-area">
                    <div class="note handle">
                        <Note class="note-control-selection">
                            <div class="note-control-selection-bg">
                                <div class="note-control-horder note-control-nw"></div>
                                <div class="note-control-horder note-control-ne"></div>
                                <div class="note-control-horder note-control-sw"></div>
                                <div class="note-control-horder note-control-se"></div>
                            </div>
                        </Note>
                        <Textarea ></Textarea>
                        <Block role="textbox" aria-multiline="true"></Block>
                    </div>                
                </div>
                </td>
            </div>
            <tr>
                <td colSpan="2" align="right">
                    <input type="button" value="등록"/>
                    <input type="button" value="목록으로"/>
                </td> 

            </tr> */}


export default QnAWrite

const Table = styled.table`
    text-decoration: none;
`
const Button = styled.button`
    text-align: center;
`
