"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();

  const passos = ["passo1", "passo2", "passo3", "passo4", "passo5"];
  const [planos, setPlanos] = useState();
  const [index, setIndex] = useState(0);
  const passo = passos[index];

  //armazenar informações dos inputs para validação do formulário
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [rua, setRua] = useState("");
  const [cidade, setCidade] = useState("");
  const [cep, setCep] = useState("");
  const [categoria, setCategoria] = useState("");
  const [interesse, setInteresse] = useState("");
  const [termosAceitos, setTermosAceitos] = useState(false);
  const [erro, setErro] = useState("");
  const [experiencia, setExperiencia] = useState("");
  const [area, setArea] = useState("");
  const [contato, setContato] = useState("");

  const [erroCep, setErroCep] = useState("");

  const handleCepChange = (e) => {
    const valor = e.target.value;
    if (/^\d*$/.test(valor)) {
      setCep(valor);
      setErroCep("");
    } else {
      setErroCep("Digite apenas números.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="lg:w-[1000px] lg:h-[600px] lg:flex w-[380px] mx-4 lg:mx-0 lg:p-8  gap-20  border-2 rounded-2xl py-4 ">
        <div className="lg:hidden bg-blue-500 rounded-lg py-2 px-4 mx-4 justify-between flex">
          <div onClick={() => setIndex(0)}>
            <h1
              className={`${
                passo === "passo1"
                  ? "  flex bg-slate-300 rounded-full font-bold p-2 cursor-pointer w-8 h-8 items-center justify-center"
                  : "flex rounded-full font-bold p-2 cursor-pointer hover:bg-slate-300 bg-white w-8 h-8 items-center justify-center"
              }`}>1</h1>
          </div>

          <div onClick={() => setIndex(1)}>
            <h1
              className={`${
                passo === "passo2"
                  ? "  flex bg-slate-300 rounded-full font-bold p-2 cursor-pointer w-8 h-8 items-center justify-center"
                  : "flex rounded-full font-bold p-2 cursor-pointer hover:bg-slate-300 bg-white w-8 h-8 items-center justify-center"
              }`}>2</h1>
          </div>

          <div onClick={() => setIndex(2)}>
            <h1
              className={`${
                passo === "passo3"
                  ? "  flex bg-slate-300 rounded-full font-bold p-2 cursor-pointer w-8 h-8 items-center justify-center"
                  : "flex rounded-full font-bold p-2 cursor-pointer hover:bg-slate-300 bg-white w-8 h-8 items-center justify-center"
              }`}>3</h1>
          </div>

          <div onClick={() => setIndex(3)}>
            <h1
              className={`${
                passo === "passo4"
                  ? "  flex bg-slate-300 rounded-full font-bold p-2 cursor-pointer w-8 h-8 items-center justify-center"
                  : "flex rounded-full font-bold p-2 cursor-pointer hover:bg-slate-300 bg-white w-8 h-8 items-center justify-center"
              }`}>4</h1>
          </div>

          <div onClick={() => setIndex(4)}>
            <h1
              className={`${
                passo === "passo5"
                  ? "  flex bg-slate-300 rounded-full font-bold p-2 cursor-pointer w-8 h-8 items-center justify-center"
                  : "flex rounded-full font-bold p-2 cursor-pointer hover:bg-slate-300 bg-white w-8 h-8 items-center justify-center"
              }`}>5</h1>
          </div>
        </div>

        <div className=" hidden lg:w-[400px] lg:bg-blue-800 lg:p-4 lg:rounded-xl lg:flex lg:gap-8 lg:flex-col">
          <div
            onClick={() => setIndex(0)}
            className={`${
              passo === "passo1"
                ? " bg-gray-950 rounded-md px-2 flex gap-6 cursor-pointer "
                : "flex gap-6 cursor-pointer"
            }`}
          >
            <div className="flex items-center">
              <h1 className="flex rounded-full font-bold p-2 bg-white w-8 h-8 items-center justify-center">
                1
              </h1>
            </div>
            <div>
              <h1 className="font-bold text-white">Passo 1</h1>
              <h2 className="text-white font-medium">Suas Informações</h2>
            </div>
          </div>

          <div
            onClick={() => setIndex(1)}
            className={`${
              passo === "passo2"
                ? "bg-gray-950 cursor-pointer rounded-md px-2 flex gap-6  "
                : "flex gap-6 cursor-pointer"
            }`}
          >
            <div className="flex items-center">
              <h1 className="flex rounded-full font-bold p-2 bg-white w-8 h-8 items-center justify-center">
                2
              </h1>
            </div>
            <div>
              <h1 className="font-bold text-white">Passo 2</h1>
              <h2 className="text-white font-medium">Endereço</h2>
            </div>
          </div>

          <div
            onClick={() => setIndex(2)}
            className={`${
              passo === "passo3"
                ? "bg-gray-950 cursor-pointer rounded-md px-2 flex gap-6 "
                : "flex gap-6 cursor-pointer"
            }`}
          >
            <div className="flex items-center">
              <h1 className="flex rounded-full font-bold p-2 bg-white w-8 h-8 items-center justify-center">
                3
              </h1>
            </div>
            <div>
              <h1 className="font-bold text-white">Passo 3</h1>
              <h2 className="text-white font-medium">
                Preferências e interesses
              </h2>
            </div>
          </div>

          <div
            onClick={() => setIndex(3)}
            className={`${
              passo === "passo4"
                ? "bg-gray-950 cursor-pointer rounded-md px-2 flex gap-6  "
                : "flex gap-6 cursor-pointer"
            }`}
          >
            <div className="flex items-center">
              <h1 className="flex rounded-full font-bold p-2 bg-white w-8 h-8 items-center justify-center">
                4
              </h1>
            </div>
            <div>
              <h1 className="font-bold text-white">Passo 4</h1>
              <h2 className="text-white font-medium">Forma de Pagamento</h2>
            </div>
          </div>

          <div
            onClick={() => setIndex(4)}
            className={`${
              passo === "passo5"
                ? "bg-gray-950 cursor-pointer rounded-md px-2 flex gap-6 "
                : "flex gap-6 cursor-pointer"
            }`}
          >
            <div className="flex items-center">
              <h1 className="flex rounded-full font-bold p-2 bg-white w-8 h-8 items-center justify-center">
                4
              </h1>
            </div>
            <div>
              <h1 className="font-bold text-white">Passo 5</h1>
              <h2 className="text-white font-medium">Revisão e confirmação</h2>
            </div>
          </div>
        </div>

        <div className=" px-4">
          {passo === "passo1" && (
            <div className="flex lg:h-full h-[420px] flex-col  justify-between lg:py-8 py-4  ">
              <div>
                <h1 className="sm:text-3xl text-xl font-bold text-slate-900">
                  Informações Pessoais
                </h1>
                <p className="text-gray-400 sm:text-xl text-md">
                  Por favor informe seu nome, email e número de telefone
                </p>
              </div>

              <div className="flex-col gap-4 flex">
                <div className="flex-col flex">
                  <label htmlFor="nome" className="text-slate-900 text-md">
                    Nome
                  </label>
                  <input
                    id="nome"
                    required
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    className="border-2 px-2 py-2 rounded-md  "
                    type="text"
                    placeholder="Ex: Lucas Carvalho"
                  />
                </div>
                <div className="flex-col flex">
                  <label htmlFor="email" className="text-slate-900 text-md">
                    Email
                  </label>
                  <input
                    id="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border-2 px-2 py-2 rounded-md "
                    type="email"
                    placeholder="Ex: LucasCarvalho@gmail.com"
                  />
                </div>
                <div className="flex-col flex">
                  <label htmlFor="telefone" className="text-slate-900 text-md">
                    Número de Telefone
                  </label>
                  <input
                    id="telefone"
                    required
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                    className="border-2 px-2 py-2 rounded-md  w-full"
                    type="text"
                    placeholder="1199999-0000"
                  />
                </div>
              </div>
              <button
                onClick={() => setIndex(index + 1)}
                className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-blue-700 cursor-pointer"
              >
                Avançar
              </button>
            </div>
          )}

          {passo === "passo2" && (
            <div className="flex lg:h-full h-[400px] flex-col  justify-between lg:py-8 py-4 ">
              <div>
                <h1 className="text-3xl font-bold text-slate-900">Endereço</h1>
                <p className="text-gray-400">
                  Por favor informe suas informações de endereço
                </p>
              </div>

              <div className="flex-col gap-4 flex">
                <div className="flex-col flex">
                  <label htmlFor="" className="text-slate-900 text-md">
                    Rua
                  </label>
                  <input
                    required
                    className="border-2 px-2 py-2 rounded-md"
                    type="text"
                    value={rua}
                    placeholder="Ex: Rua dos Bobos"
                    onChange={(e) => setRua(e.target.value)}
                  />
                </div>
                <div className="flex-col flex">
                  <label htmlFor="" className="text-slate-900 text-md">
                    Cidade
                  </label>
                  <input
                    required
                    className="border-2 px-2 py-2 rounded-md"
                    type="text"
                    placeholder="Ex: São Paulo"
                    value={cidade}
                    onChange={(e) => setCidade(e.target.value)}
                  />
                </div>

                <div className="flex-col flex">
                  <label htmlFor="cep" className="text-slate-900 text-md">
                    CEP
                  </label>
                  <input
                    id="cep"
                    required
                    className="border-2 px-2 py-2 rounded-md"
                    type="text"
                    inputMode="numeric"
                    placeholder="Ex: 12345678"
                    value={cep}
                    onChange={handleCepChange}
                    maxLength={8}
                  />
                  {erroCep && <p className="text-red-500 text-sm">{erroCep}</p>}
                </div>
              </div>

              <div className="flex justify-between">
                <button
                  onClick={() => setIndex(index - 1)}
                  className="bg-blue-500 rounded-md px-2 py-1 text-white hover:bg-blue-700 cursor-pointer"
                >
                  Voltar Passo
                </button>
                <button
                  onClick={() => setIndex(index + 1)}
                  className="bg-blue-500 rounded-md px-2 py-1 text-white hover:bg-blue-700 cursor-pointer"
                >
                  Próximo Passo
                </button>
              </div>
            </div>
          )}

          {passo === "passo3" && (
            <div className="flex lg:h-full flex-col justify-between lg:py-8 h-[500px] py-4">
              <div>
                <h1 className="text-3xl font-bold text-slate-900">
                  Preferência e Interesses
                </h1>
                <p className="text-gray-400">Selecione suas preferências</p>
              </div>

              <div className="flex-col gap-4 flex">
                <div className="flex-col flex">
                  <label htmlFor="categoria" className="text-slate-900 text-md">
                    Categoria
                  </label>
                  <select
                    value={categoria}
                    id="categoria"
                    required
                    className="border-2 px-2 py-2 rounded-md cursor-pointer"
                    onChange={(e) => setCategoria(e.target.value)}
                  >
                    <option value="">Selecione uma categoria</option>
                    <option value="Tecnologia">Tecnologia</option>
                    <option value="Design">Design</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Negócios">Negócios</option>
                    <option value="Saúde">Saúde</option>
                    <option value="Educação">Educação</option>
                  </select>
                </div>

                <div className="flex-col flex">
                  <label
                    htmlFor="experiencia"
                    className="text-slate-900 text-md"
                  >
                    Nível de Experiência
                  </label>
                  <select
                    id="experiencia"
                    required
                    value={experiencia}
                    className="border-2 px-2 py-2 rounded-md cursor-pointer"
                    onChange={(e) => setExperiencia(e.target.value)}
                  >
                    <option value="">Selecione...</option>
                    <option value="iniciante">Iniciante</option>
                    <option value="intermediario">Intermediário</option>
                    <option value="avancado">Avançado</option>
                  </select>
                </div>

                <div className="flex-col flex">
                  <label htmlFor="area" className="text-slate-900 text-md">
                    Área de Atuação
                  </label>
                  <select
                    id="area"
                    required
                    value={area}
                    className="border-2 px-2 py-2 rounded-md cursor-pointer"
                    onChange={(e) => setArea(e.target.value)}
                  >
                    <option value="">Selecione...</option>
                    <option value="desenvolvimento">Desenvolvimento</option>
                    <option value="design">Design</option>
                    <option value="dados">Ciência de Dados</option>
                    <option value="seguranca">Segurança da Informação</option>
                  </select>
                </div>

                <div className="flex-col flex">
                  <label htmlFor="contato" className="text-slate-900 text-md">
                    Método de Contato Preferido
                  </label>
                  <select
                    id="contato"
                    required
                    value={contato}
                    className="border-2 px-2 py-2 rounded-md cursor-pointer"
                    onChange={(e) => setContato(e.target.value)}
                  >
                    <option value="">Selecione...</option>
                    <option value="email">E-mail</option>
                    <option value="telefone">Telefone</option>
                    <option value="whatsapp">WhatsApp</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-between">
                <button
                  onClick={() => setIndex(index - 1)}
                  className="bg-blue-500 rounded-md px-2 py-1 text-white hover:bg-blue-700 cursor-pointer"
                >
                  Voltar Passo
                </button>
                <button
                  onClick={() => setIndex(index + 1)}
                  className="bg-blue-500 rounded-md px-2 py-1 text-white hover:bg-blue-700 cursor-pointer"
                >
                  Próximo Passo
                </button>
              </div>
            </div>
          )}

          {passo === "passo4" && (
            <div className="flex lg:h-full flex-col justify-between  h-[550px] py-4 ">
              <div>
                <h1 className="text-3xl font-bold text-slate-900">
                  Plano de Pagamento
                </h1>
                <p className="text-gray-400">Escolha seu plano de pagamento</p>
              </div>

              <div className="gap-2 flex flex-col">
                <div
                  className={`${
                    planos === "gratuito"
                      ? "bg-slate-300 rounded-lg flex p-2 justify-between  gap-4 border-2"
                      : "rounded-lg flex p-2 justify-between  gap-4 border-2"
                  }`}
                >
                  <h1 className="font-bold text-xl text-center text-blue-800 items-center flex  ">
                    Plano Gratuito
                  </h1>
                  <div className=" w-40">
                    <p className="text-center text-gray-600 mb-4  font-medium">
                      Funcionalidades Limitadas e abertas.{" "}
                    </p>
                    <button
                      onClick={() => setPlanos("gratuito")}
                      className="w-full py-2 bg-blue-800 cursor-pointer text-white rounded-md hover:bg-blue-600 transition-colors"
                    >
                      Escolher
                    </button>
                  </div>
                </div>

                <div
                  className={`${
                    planos === "pro"
                      ? "bg-slate-300 rounded-lg flex p-2 justify-between  gap-4 border-2"
                      : "rounded-lg flex w-full p-2 gap-4 justify-between border-2"
                  }`}
                >
                  <h1 className="font-bold text-xl text-center text-blue-800 flex items-center  ">
                    Plano Pro
                  </h1>
                  <div className=" w-40 ">
                    <p className="text-center text-gray-600 mb-4  font-medium">
                      Recursos e suporte de usuário.
                    </p>
                    <button
                      onClick={() => setPlanos("pro")}
                      className="w-full py-2 bg-blue-800 cursor-pointer text-white rounded-md hover:bg-blue-600 transition-colors"
                    >
                      Escolher
                    </button>
                  </div>
                </div>

                <div
                  className={`${
                    planos === "premium"
                      ? "bg-slate-300 rounded-lg flex p-2 justify-between  gap-4 border-2"
                      : "rounded-lg flex w-full p-2 gap-4 justify-between border-2"
                  }`}
                >
                  <h1 className="font-bold text-xl text-center flex items-center text-blue-800 ">
                    Plano Premium
                  </h1>
                  <div className=" w-40 ">
                    <p className="text-center text-gray-600 mb-4  font-medium">
                      Recursos ilimitados e sem custo extra.
                    </p>
                    <button
                      onClick={() => setPlanos("premium")}
                      className="w-full py-2 bg-blue-800 cursor-pointer text-white rounded-md hover:bg-blue-600 transition-colors"
                    >
                      Escolher
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex justify-between">
                <button
                  onClick={() => setIndex(index - 1)}
                  className="bg-blue-500 rounded-md px-2 py-1 text-white hover:bg-blue-700 cursor-pointer"
                >
                  Voltar Passo
                </button>

                <button
                  onClick={() => setIndex(index + 1)}
                  className="bg-blue-500 rounded-md px-2 py-1 text-white hover:bg-blue-700 cursor-pointer"
                >
                  Próximo Passo
                </button>
              </div>
            </div>
          )}

          {passo === "passo5" && (
            <div className="flex flex-col items-center justify-center gap-4 h-full py-6">
              <div className="text-center">
                <h1 className="text-3xl font-bold text-slate-900">
                  Revisão e Confirmação
                </h1>
                <p className="text-gray-400">
                  Revise suas informações antes de finalizar.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="termos"
                  checked={termosAceitos}
                  onChange={() => setTermosAceitos(!termosAceitos)}
                />
                <label htmlFor="termos" className="text-slate-900">
                  Aceito os termos e condições
                </label>
              </div>

              {erro && <div className="text-red-500 text-sm">{erro}</div>}

              <div className="flex justify-between w-full ">
                <button
                  onClick={() => setIndex(index - 1)}
                  className="bg-blue-500 rounded-md sm:px-4 sm:py-2 px-2 text-white hover:bg-blue-700 cursor-pointer"
                >
                  Voltar Passo
                </button>

                <button
                  onClick={() => {
                    if (!nome || !email || !telefone || !rua || !cidade || !cep || !categoria || !experiencia || !contato || !area || !planos || !termosAceitos
                    ) {
                      setErro(
                        "Por favor, preencha todos os campos e aceite os termos e condições."
                      );
                      return;
                    }

                    setNome(""); setEmail(""); setTelefone(""); setRua(""); setCidade(""); setCep(""); setCategoria(""); setExperiencia(""); setArea(""); setContato(""); setPlanos(""); setTermosAceitos(false); setErro("");

                    router.push("/welcome");
                  }}
                  className="bg-blue-500 rounded-md px-4 py-2 text-white hover:bg-blue-700 cursor-pointer"
                >
                  Finalizar Formulário
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
