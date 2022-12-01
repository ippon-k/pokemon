// APIの実装

// 1 データを表示する準備します🤗
// async これが表示された瞬間⇨これは非同期といいます🤗
// あるおまじないを実行した後に、「何か」をしたいときに使うようなイメージです🤗
const pokemonNum = 151;

const fetchPokemons = async () => {
  for (let i = 1; i <= pokemonNum; i++) {
    await getPokemon(i); //iというところに数字が「入ってくる」🤗
  }
};

// 2. await getPokemon()というおまじないを作成します🤗
const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  // javascriptの書き方でデータを取得します🤗
  // fetchと呼んでいます、他の方法だと[axios]  or [Ajax] があります
  // そしてそれらは「全部同じ」です🤗
  // [axios]が一番簡単で、次に最新の[fetch],そして一番古いのが[Ajax]
  // responseの省略形で、よくresと書くことが多いです🤗
  const res = await fetch(url);
  // console.log(res, "res");
  // javascriptのデータに変換している動作がjson()というイメージです🤗
  const pokemon = await res.json();
  console.log(pokemon, "データ javascript");
  createPokemon(pokemon); //javascriptで変換したデータの塊を渡す＝オブジェクトを渡す
};

//3. htmlを「javascriptで作成し」、それを「htmlに埋め込む」おまじないを記述します🤗
const createPokemon = (pokemon) => {
  // console.log(pokemon.height, "createPokemonのおまじないの中");
  // console.log(pokemon.id);
  const poke = `
    <div class="card">
      <p>ポケモンNo. ${pokemon.id}番</p>
      <p>ポケモン名 ${pokemon.name}</p>
      <p>体重 ${pokemon.weight}</p>
      <p><img src="${pokemon.sprites.front_default}" /></p>
      <p><img src="${pokemon.sprites.back_default}" /></p>
      <p><img src="${pokemon.sprites.front_shiny}" /></p>
    </div>
  `;

  // htmlに埋め込みます
  // <ul class="list"></ul>の場所に埋め込むおまじない
  $(".list").append(poke);
};

// fetchPokemonsを発動！スイッチオン！（魔法を使います！）というイメージ🤗
fetchPokemons();
