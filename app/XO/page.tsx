"use client";

import { useRef, useState } from "react";

function XO() {
  let [role, setRole] = useState<string>("X");
  const [X, setX] = useState<number>(0);
  const [O, setO] = useState<number>(0);
  const td1 = useRef<HTMLTableCellElement>(null);
  const td2 = useRef<HTMLTableCellElement>(null);
  const td3 = useRef<HTMLTableCellElement>(null);
  const td4 = useRef<HTMLTableCellElement>(null);
  const td5 = useRef<HTMLTableCellElement>(null);
  const td6 = useRef<HTMLTableCellElement>(null);
  const td7 = useRef<HTMLTableCellElement>(null);
  const td8 = useRef<HTMLTableCellElement>(null);
  const td9 = useRef<HTMLTableCellElement>(null);

  const vide = () => {
    if (
      td1.current &&
      td2.current &&
      td3.current &&
      td4.current &&
      td5.current &&
      td6.current &&
      td7.current &&
      td8.current &&
      td9.current
    ) {
      td1.current.innerHTML = "";
      td2.current.innerHTML = "";
      td3.current.innerHTML = "";
      td4.current.innerHTML = "";
      td5.current.innerHTML = "";
      td6.current.innerHTML = "";
      td7.current.innerHTML = "";
      td8.current.innerHTML = "";
      td9.current.innerHTML = "";
    }
  };
  const Score = () => {
    if (
      td1.current &&
      td2.current &&
      td3.current &&
      td4.current &&
      td5.current &&
      td6.current &&
      td7.current &&
      td8.current &&
      td9.current
    ) {
      if (
        (td1.current.innerHTML == td2.current.innerHTML &&
          td2.current.innerHTML == td3.current.innerHTML &&
          td3.current.innerHTML == "X") ||
        (td4.current.innerHTML == td5.current.innerHTML &&
          td5.current.innerHTML == td6.current.innerHTML &&
          td6.current.innerHTML == "X") ||
        (td7.current.innerHTML == td8.current.innerHTML &&
          td8.current.innerHTML == td9.current.innerHTML &&
          td9.current.innerHTML == "X") ||
        (td1.current.innerHTML == td4.current.innerHTML &&
          td4.current.innerHTML == td7.current.innerHTML &&
          td7.current.innerHTML == "X") ||
        (td2.current.innerHTML == td5.current.innerHTML &&
          td5.current.innerHTML == td8.current.innerHTML &&
          td8.current.innerHTML == "X") ||
        (td3.current.innerHTML == td6.current.innerHTML &&
          td6.current.innerHTML == td9.current.innerHTML &&
          td9.current.innerHTML == "X") ||
        (td1.current.innerHTML == td5.current.innerHTML &&
          td5.current.innerHTML == td9.current.innerHTML &&
          td9.current.innerHTML == "X") ||
        (td3.current.innerHTML == td5.current.innerHTML &&
          td5.current.innerHTML == td7.current.innerHTML &&
          td7.current.innerHTML === "X")
      ) {
        vide();
        setX(X + 1);
        return;
      }
      if (
        (td1.current.innerHTML == td2.current.innerHTML &&
          td2.current.innerHTML == td3.current.innerHTML &&
          td3.current.innerHTML == "O") ||
        (td4.current.innerHTML == td5.current.innerHTML &&
          td5.current.innerHTML == td6.current.innerHTML &&
          td6.current.innerHTML == "O") ||
        (td7.current.innerHTML == td8.current.innerHTML &&
          td8.current.innerHTML == td9.current.innerHTML &&
          td9.current.innerHTML == "O") ||
        (td1.current.innerHTML == td4.current.innerHTML &&
          td4.current.innerHTML == td7.current.innerHTML &&
          td7.current.innerHTML == "O") ||
        (td2.current.innerHTML == td5.current.innerHTML &&
          td5.current.innerHTML == td8.current.innerHTML &&
          td8.current.innerHTML == "O") ||
        (td3.current.innerHTML == td6.current.innerHTML &&
          td6.current.innerHTML == td9.current.innerHTML &&
          td9.current.innerHTML == "O") ||
        (td1.current.innerHTML == td5.current.innerHTML &&
          td5.current.innerHTML == td9.current.innerHTML &&
          td9.current.innerHTML == "O") ||
        (td3.current.innerHTML == td5.current.innerHTML &&
          td5.current.innerHTML == td7.current.innerHTML &&
          td7.current.innerHTML === "O")
      ) {
        vide();
        setO(O + 1);
        return;
      }
      if (
        td1.current.innerHTML != "" &&
        td2.current.innerHTML != "" &&
        td3.current.innerHTML != "" &&
        td4.current.innerHTML != "" &&
        td5.current.innerHTML != "" &&
        td6.current.innerHTML != "" &&
        td7.current.innerHTML != "" &&
        td8.current.innerHTML != "" &&
        td9.current.innerHTML != ""
      ) {
        vide();
      }
    }
  };
  const insert = (td: React.RefObject<HTMLTableCellElement | null>) => {
    if (td.current) {
      if (td.current.innerText == "") {
        td.current.innerText = role;
        if (role == "X") {
          setRole("O");
        } else {
          setRole("X");
        }
        Score();
      }
    }
  };
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl p-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          XO Game
        </h1>
        <table className="border-collapse text-black">
          <tbody>
            <tr>
              <td
                ref={td1}
                onClick={() => insert(td1)}
                className="w-24 h-24 border-4 border-gray-700 text-4xl font-bold text-center cursor-pointer hover:bg-gray-100 transition-colors"
              ></td>
              <td
                ref={td2}
                onClick={() => insert(td2)}
                className="w-24 h-24 border-4 border-gray-700 text-4xl font-bold text-center cursor-pointer hover:bg-gray-100 transition-colors"
              ></td>
              <td
                ref={td3}
                onClick={() => insert(td3)}
                className="w-24 h-24 border-4 border-gray-700 text-4xl font-bold text-center cursor-pointer hover:bg-gray-100 transition-colors"
              ></td>
            </tr>
            <tr>
              <td
                ref={td4}
                onClick={() => insert(td4)}
                className="w-24 h-24 border-4 border-gray-700 text-4xl font-bold text-center cursor-pointer hover:bg-gray-100 transition-colors"
              ></td>
              <td
                ref={td5}
                onClick={() => insert(td5)}
                className="w-24 h-24 border-4 border-gray-700 text-4xl font-bold text-center cursor-pointer hover:bg-gray-100 transition-colors"
              ></td>
              <td
                ref={td6}
                onClick={() => insert(td6)}
                className="w-24 h-24 border-4 border-gray-700 text-4xl font-bold text-center cursor-pointer hover:bg-gray-100 transition-colors"
              ></td>
            </tr>
            <tr>
              <td
                ref={td7}
                onClick={() => insert(td7)}
                className="w-24 h-24 border-4 border-gray-700 text-4xl font-bold text-center cursor-pointer hover:bg-gray-100 transition-colors"
              ></td>
              <td
                ref={td8}
                onClick={() => insert(td8)}
                className="w-24 h-24 border-4 border-gray-700 text-4xl font-bold text-center cursor-pointer hover:bg-gray-100 transition-colors"
              ></td>
              <td
                ref={td9}
                onClick={() => insert(td9)}
                className="w-24 h-24 border-4 border-gray-700 text-4xl font-bold text-center cursor-pointer hover:bg-gray-100 transition-colors"
              ></td>
            </tr>
          </tbody>
        </table>
        <div className="mt-6 flex justify-between items-center bg-gray-50 rounded-lg p-4 shadow-sm">
          <div className="flex items-center space-x-4">
            <div className="text-xl font-bold text-blue-600">X</div>
            <div className="text-2xl font-bold text-gray-800">{X}</div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-2xl font-bold text-gray-800">
              role [ {role} ]
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-xl font-bold text-red-600">O</div>
            <div className="text-2xl font-bold text-gray-800">{O}</div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default XO;
