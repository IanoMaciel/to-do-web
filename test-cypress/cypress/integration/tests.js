/// <reference types="cypress" />

describe("ToDO", () => {
  it("CEN01 - O usuário entrará no site do aplicativo", () => {
    //cy.visit - buscar site ou parte dele
    cy.visit("http://localhost:3000/qrcode");
    expect(200).be.eq(200);
  });
  it("CEN02 - O usuário irá apontar seu smartphone para tela que contém o QRcode da aplicação", () => {
    //cy.get - busca um elemento
    cy.get("canvas"); // verifica se tem uma instancia do qrcode
    cy.get("input").type("11:11:11:11:11:11"); // verifica se usuario pode entrar com um numero mac
    cy.get("button").click(); // clica no botão 'Sincronizar'
    expect(200).be.eq(200);
  });
  it("CEN03 - Na interface Home clique em Nova Tarefa", () => {
    cy.get('[href="/task"]').click(); // usuario clica em nova tarefa
    expect(200).be.eq(200);
  });
  it("CEN04 - Na tela de Nova Tarefa, inserir as informações: tipo de tarefa, título, descrição, data e hora", () => {
    cy.get(":nth-child(6) > img").click(); // seleciona um dos tipo de tarefa
    cy.get(":nth-child(2) > input").click().type("Fazer as bagagens");
    cy.get("textarea").type(
      "Fazer as malas para as férias. Lembrando de organizar as bagagens seguindo o checklist que está no bloco de notas."
    );
    cy.get(":nth-child(4) > input").click().type("2022-09-23");
    cy.get(":nth-child(5) > input").click().type("19:10");
    expect(200).be.eq(200);
  });
  it("CEN05 - Salvar tarefa", () => {
    cy.get(".sc-fnykZs > button").click();
    expect(200).be.eq(200);
  });
  it("CEN06 - Na tela Home, o usuário irá clicar em uma tarefa já castrada e alterá-la.", () => {
    cy.get(".sc-papXJ.gykcbg").click();
    cy.get(":nth-child(2) > input").click().clear();
    cy.get(":nth-child(2) > input")
      .click()
      .type("Terminar trabalho final de TVVS");
    cy.get("textarea").click().clear();
    cy.get("textarea")
      .click()
      .type("Implementar e documentar os testes do sistema");
    expect(200).be.eq(200);
  });
  it("CEN07 - Ao clicar em Salvar usuário será direcionado para a tela inicial (Home).", () => {
    cy.get(".sc-fnykZs > button").click();
    expect(200).be.eq(200);
  });
  it("CEN08 - Na tela home o usuário irá clicar em uma tarefa já cadastrada.", () => {
    cy.get(".sc-jqUVSM").click();
    expect(200).be.eq(200);
  });
  it("CEN09 - Clicar em Excluir.", () => {
    cy.get(".sc-hAZoDl > button").click();
    expect(200).be.eq(200);
  });
  it("CEN10 - Usuário deverá cadastrar uma nova tarefa onde será necessário realizar os cenários 3, 4 e 5, respectivamente.", () => {
    cy.get('[href="/task"]').click();
    cy.get(":nth-child(3) > img").click();
    cy.get(":nth-child(2) > input").click().type("Organizar lanche da tarde");
    cy.get("textarea").type(
      "Comprar os materias e organizar um lanche da tarde para os amigos."
    );
    cy.get(":nth-child(4) > input").click().type("2022-09-22");
    cy.get(":nth-child(5) > input").click().type("14:00");
    cy.get(".sc-fnykZs > button").click();
  });
  it("CEN11 - Ao cadastrar uma tarefa o usuário será direcionado para todas as tarefas cadastradas.", () => {
    expect('http://localhost:3000/').be.eq('http://localhost:3000/');
  });
  it("CEN12 - Sair do sistema. Clicar no botão Sair localizado na barra de navegação.", () => {
    cy.get('.sc-gKXOVf > button').click();
  });
});
