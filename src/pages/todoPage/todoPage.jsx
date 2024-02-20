import {importJson, SectionList} from "../../components/index.js";
import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import "./todoPage.css";

export const TodoPage = () => {
    const params = useParams();
    const taskId = params.id;

    useEffect(() => {
        const fetchData = async () => await importJson(setTask);
        fetchData();
    }, []);
    const [task, setTask] = useState([]);



    return (
        <>
            <div className="container">
                <Link className="back" to={"/"}>Назад</Link>
                {task.map((item) => {
                    if (item.id === taskId) {
                        return (
                            <SectionList
                                key={item.id}
                                check={item.check}
                                index={item.id}
                                funcSet={setTask}
                            >
                                {item.text}
                            </SectionList>
                        );
                    }
                })}
            </div>

        </>
    );
}
