async function fetchUserData(username) {
  const response = await fetch(`https://api.github.com/users/${username}`);
  const data = await response.json();
  return data;
}

async function user(username) {
  try {
    const perfil = await fetchUserData(username);
    console.log(`Nome: ${perfil.name}`);
    console.log(`Bio: ${perfil.bio}`);
    console.log(`Repositórios públicos: ${perfil.public_repos}`);
  } catch (error) {
    console.log(`Erro ao buscar dados do usuário: ${error.message}`);
  }
}

user("nivlekrod");