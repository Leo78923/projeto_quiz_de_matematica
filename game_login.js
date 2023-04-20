function addUser() 
  {
    player1_name = document.getElementById("").value; /* Adicionar o id do jogador 1, ver no index.html */
    player2_name = document.getElementById("").value; /* Adicionar o id do jogador 2, ver no index.html */
  
      localStorage.setItem("", player1_name); /* Coloque o nome da chave dentro das aspas */
      localStorage.setItem("", player2_name); /* Coloque o nome da chave dentro das aspas */
  
      window.location = "game_page.html";
  }