import {importJson, SectionList} from "../../components/index.js";
import {useEffect, useState} from "react";


export const TodoPage = () => {
    useEffect(() => {
        const fetchData = async () => await importJson(setTask);
        console.log(fetchData())
        fetchData();
    }, []);
    const [task, setTask] = useState([]);
  return (<div className="list">
          <ul>
              {task.map((item, index) => {
                  return (
                      <SectionList
                          key={index}
                          check={item.check}
                          index={item.id}
                          funcSet={setTask}
                      >
                          {item.text}
                      </SectionList>
                  );
              })}
          </ul>
      </div>
  );
};
