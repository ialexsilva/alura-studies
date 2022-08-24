import React from "react"; // import React from 'react';
import Botao from "../Botao";
import { ITarefa } from "../../types/tarefa";
import style from "./Formulario.module.scss";
import { v4 as uuidv4 } from "uuid";

class Formulario extends React.Component<{ setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>> }> {
  state = {
    tarefa: "",
    tempo: "00:00",
  };

  adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    this.props.setTarefas((tarefasAntigas) => [
      ...tarefasAntigas,
      { ...this.state, selecionado: false, completado: false, id: uuidv4() },
    ]);
    this.setState({ tarefa: "", tempo: "00:00" });
  }

  render() {
    return (
      <form className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
        <div className={style.inputContainer}>
          <label htmlFor="tarefa">Adicione um novo estudo</label>
          <input
            type="text"
            name="tarefa"
            id="tarefa"
            placeholder="O que você quer estudar?"
            value={this.state.tarefa}
            onChange={(e) => this.setState({ tarefa: e.target.value })}
            required
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="tempo"> Tempo</label>
          <input
            type="time"
            step="1"
            name="tempo"
            id="tempo"
            min="00:00:00"
            max="01:30:00"
            value={this.state.tempo}
            onChange={(e) => this.setState({ tempo: e.target.value })}
            required
          />
        </div>
        <Botao type="submit"> Adicionar </Botao>
      </form>
    );
  }
}
export default Formulario; // export default App;
