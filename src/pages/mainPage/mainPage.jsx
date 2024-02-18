import {importJson, SectionAdd, SectionList} from "../../components";
import {useEffect, useState} from "react";

export const MainPage = () => {
    useEffect(() => {
        const fetchData = async () => await importJson(setTasks);
        fetchData();
    }, []);
    const [textInput, setTextInput] = useState("");
    const [tasks, setTasks] = useState([]);


    return (
        <>
            <div className="container">
                <SectionAdd
                    value={textInput}
                    onChangeValue={setTextInput}
                    funcSet={setTasks}
                />
                <div className="list">
                    <ul>
                        {tasks.map((item, index) => {
                            return (
                                <SectionList
                                    key={index}
                                    check={item.check}
                                    index={item.id}
                                    funcSet={setTasks}
                                >
                                    {item.text}
                                </SectionList>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </>
    );
};
