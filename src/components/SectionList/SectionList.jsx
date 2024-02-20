import "./sectionList.css";
import {deleteJson, patchJson} from "../axiosReq";
import {useState} from "react";
import {Link} from "react-router-dom";

export const SectionList = ({children, check, index, funcSet}) => {
    const [isEdit, setIsEdit] = useState(false);
    const [textValue, setTextValue] = useState(children);
    const classListEl = `listEl-text ${check ? "active" : ""}`;

    return (<li className="listEl">
        {isEdit ? (<textarea
            rows={10}
            className={classListEl}
            value={textValue}
            onChange={(e) => setTextValue(e.target.value)}
        />) : (<Link to={`/tasks/${index}`}><span className={classListEl}>{children}</span></Link>)}


        <span>
                <span className="listEl-btns">
                  <button
                      className="btn positive"
                      onClick={() => patchJson({check: !check}, index, funcSet)}
                  >
                    ✔️
                  </button>
                  <button
                      className="btn negative"
                      onClick={() => deleteJson(index, funcSet)}
                  >
                    X
                  </button>
                  <button
                      className="btn edit"
                      onClick={() => {
                          if (!isEdit) return setIsEdit(true); else if (isEdit) {
                              patchJson({text: textValue}, index, funcSet);
                              setIsEdit(false);
                          }
                      }}
                  >
                    {isEdit ? "Сохранить" : "Редактировать"}
                  </button>
                </span>
            </span>
    </li>);
}
