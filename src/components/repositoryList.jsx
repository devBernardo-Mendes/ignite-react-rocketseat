import React from "react";

const repositoryName = "unform2";

export function RepositoryList() {
  return (
    <section>
      <h1>Lista de repositorios</h1>

      <ul>
        <li>
          <strong>{repositoryName}</strong>
          <p>Forms in React</p>
          <a href="">Acessar Repositorio</a>
        </li>
      </ul>
      <ul>
        <li>
          <strong>unform</strong>
          <p>Forms in React</p>
          <a href="">Acessar Repositorio</a>
        </li>
      </ul>
      <ul>
        <li>
          <strong>unform</strong>
          <p>Forms in React</p>
          <a href="">Acessar Repositorio</a>
        </li>
      </ul>
    </section>
  );
}
