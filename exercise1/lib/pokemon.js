angular.module("pokemon",[])
    .factory("pokeData",function(){
        var pokemon=[
            {name:'Charizard',stats:[220,111,89,114,156,95]},
            {name:'Squirtle',stats:[56,26,38,19,25,30]},
            {name:'Ivysaur',stats:[150,99,89,75,100,85]},
            {name:'Greninja',stats:[200,130,79,170,142,102]},
            {name:'Jigglypuff',stats:[107,70,82,53,71,80]},
            {name:'Pikachu',stats:[155,84,89,104,87,55]},
            {name:'Pichu',stats:[45,29,15,54,30,11]},
            {name:'Mewtwo',stats:[234,101,84,117,176,95]},
            {name:'Lucario',stats:[202,141,105,95,106,190]}
        ];
        return {
            getData:function(){
                return pokemon;
            },
            getLabels:function(){
                return ["HP","Attack", "Defense", "Speed","Sp.Atk", "Sp.Def"];
            }
        };
    });

