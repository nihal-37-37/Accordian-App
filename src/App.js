import "./App.css";
import { useState } from "react";

const accordianList = [
  {
    title: "Title One",
    body: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, excepturi hic quod qui libero officiis dolorem asperiores mollitia nostrum veniam, quia ex atque a incidunt assumenda consequuntur ut quos debitis repellat perferendis vel fuga alias amet beatae! Illo, ipsam debitis voluptas error blanditiis quaerat corporis explicabo sapiente ullam distinctio non, molestias ex aperiam, assumenda alias eos impedit consectetur quisquam animi suscipit. Cum quo saepe ipsa consectetur necessitatibus suscipit earum ipsum molestiae velit. Suscipit, magni. Eos temporibus totam nostrum, consequuntur eligendi accusantium repudiandae quia nisi, neque perferendis reiciendis ut ratione rem, esse deleniti quas odio illum possimus. Nesciunt, fugiat! Tempore, maxime?",
  },
  {
    title: "Title Two",
    body: "reiciendis autem cupiditate. Commodi beatae fuga ipsa expedita explicabo odio perspiciatis alias! Nulla id illum quaerat aliquid. Ex dolor voluptate fugiat quis corrupti atque neque quae, cupiditate corporis, a enim sint. Accusantium voluptates, a, doloribus fugit, facilis eos enim ipsum iste dolorem rem veniam numquam. Animi repellendus, ab, minima exercitationem totam enim voluptatem, necessitatibus delectus vel officiis ipsam sed et veritatis.",
  },
  {
    title: "Title Three",
  },
  {
    title: "Title Four",
    body: "aspernatur sit consequatur, hic, ex molestiae natus optio saepe eos ipsam officiis, asperiores suscipit voluptas blanditiis dolore ipsa adipisci? Sed, quas maxime dolor blanditiis soluta eveniet nemo ratione esse dolore nobis culpa incidunt, temporibus ea cumque totam magnam minus quos aliquid quibusdam nihil sapiente. Eaque ipsa praesentium reiciendis atque eligendi, eos quidem quia? Autem, amet laudantium consequuntur iste magni sequi ratione inventore necessitatibus accusamus dolorem quas labore? Saepe corrupti iusto ex vel, veniam voluptate soluta accusantium eaque repudiandae! Assumenda molestiae asperiores harum explicabo corrupti, natus aspernatur eius molestias nam blanditiis, autem totam, et odit. Dolorum in aliquid, blanditiis beatae animi aperiam eius quo. Atque fugiat tempora perferendis necessitatibus natus reprehenderit, aliquid hic sequi nobis labore aliquam reiciendis, suscipit minima asperiores nisi et aspernatur accusamus non. Ab enim unde, laborum pariatur quaerat quae mollitia consectetur, placeat nisi hic nostrum asperiores assumenda veniam ipsum incidunt consequuntur provident ullam inventore molestiae culpa eum natus blanditiis dolorem? Reprehenderit illo obcaecati, iusto ducimus culpa laboriosam ea beatae eius nisi, asperiores voluptas expedita dolore repudiandae cum incidunt. Numquam, cumque. Odio non aspernatur animi soluta dolorum quas voluptate ut facere rerum unde, vero consequuntur quis harum neque dicta expedita, atque porro at consequatur sint autem iusto. Dolor culpa obcaecati minus nemo non adipisci rem, aspernatur hic id autem, fugit illum, quis illo corrupti. Quas consequuntur error sunt laboriosam hic sed assumenda eveniet voluptate consectetur ipsum repellat cumque, in possimus autem ea modi earum nihil tempore voluptatum. Amet quibusdam vero dolore eveniet error, repellendus blanditiis eaque tempora ipsum sapiente nam iusto repudiandae! Quae unde vitae, tenetur et illum quibusdam magnam quas modi. Similique necessitatibus explicabo culpa rem officiis? Quas earum aperiam eum. Modi assumenda dolorum harum, rem minima atque?",
  },
  {
    title: "Title Five",
    body: "inventore necessitatibus accusamus dolorem quas labore? Saepe corrupti iusto ex vel, veniam voluptate soluta accusantium eaque repudiandae! Assumenda molestiae asperiores harum explicabo corrupti, natus aspernatur eius molestias nam blanditiis, autem totam, et odit. Dolorum in aliquid, blanditiis beatae animi aperiam eius quo. Atque fugiat tempora perferendis necessitatibus natus reprehenderit, aliquid hic sequi nobis labore aliquam reiciendis, suscipit minima asperiores nisi et aspernatur accusamus non. Ab enim unde, laborum pariatur quaerat quae mollitia consectetur, placeat nisi hic nostrum asperiores assumenda veniam ipsum incidunt consequuntur provident ullam inventore molestiae culpa eum natus blanditiis dolorem? Reprehenderit illo obcaecati, iusto ducimus culpa laboriosam ea beatae eius nisi, asperiores voluptas expedita dolore repudiandae cum incidunt. Numquam, cumque. Odio non aspernatur animi soluta dolorum quas voluptate ut facere rerum unde, vero consequuntur quis harum neque dicta expedita, atque porro at consequatur sint autem iusto. Dolor culpa obcaecati minus nemo non adipisci rem, aspernatur hic id autem, fugit illum, quis illo corrupti. Quas consequuntur error sunt laboriosam hic sed assumenda eveniet voluptate consectetur ipsum repellat cumque, in possimus autem ea modi earum nihil tempore voluptatum",
  },
];

function App() {
  const [accordian, setAccordian] = useState(
    new Array(accordianList.length).fill(false).map((v, i) => ({
      id: i,
      classList: ["accordian", "close"].join(" "),
    }))
  );

  const hanndleOpen = (index) => {
    setAccordian((old) =>
      old.map((v) =>
        v.id === index
          ? {
              ...v,
              classList: v.classList.includes("close")
                ? v.classList.replace("close", "show")
                : v.classList.includes("show")
                ? v.classList.replace("show", "close")
                : v.classList,
            }
          : v
      )
    );
  };

  return (
    <div className="App">
      {accordianList.map((value, index) => {
        return (
          <div
            key={index}
            style={{
              // border: "1px solid #e5e5e5",
              padding: "20px 20px 0",
            }}
          >
            <h1
              className="header"
              style={{ padding: "8px 16px", margin: 0 }}
              onClick={() => {
                hanndleOpen(index);
              }}
            >
              {value.title}
            </h1>
            <p className={accordian[index].classList}>
              {value.body ? value.body : "No data"}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
