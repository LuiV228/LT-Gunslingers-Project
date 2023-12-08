document.querySelector(`#currentYear`).textContent = new Date().getUTCFullYear()

let admin = JSON.parse(localStorage.getItem('admin')) || []
let aTable = document.querySelector('[admin-table]')
let items = JSON.parse(localStorage.getItem(`stock`))
  ? JSON.parse(localStorage.getItem(`stock`))
  : localStorage.setItem(
      `stock`,
      JSON.stringify([
        {
          image: `/Gun Backgrounds/LT Products/Pistols/Beretta 92FS.jpg`,
          id: 1,
          name: `Beretta 92FS`,
          category: `Pistols`,
          price: 11000,
        },
        {
          image: `/Gun Backgrounds/LT Products/Pistols/CZ 75 SP-01.jpg`,
          id: 2,
          name: `CZ 75 SP-01`,
          category: `Pistols`,
          price: 12000,
        },
        {
          image: `/Gun Backgrounds/LT Products/Pistols/FNH FN 509.jpg`,
          id: 3,
          name: `FNH FN509`,
          category: `Pistols`,
          price: 13000,
        },
        {
          image: `/Gun Backgrounds/LT Products/Pistols/Glock 19 Gen 5.webp`,
          id: 4,
          name: `Glock 19 Gen 5`,
          category: `Pistols`,
          price: 14000,
        },
        {
          image: `/Gun Backgrounds/LT Products/Pistols/HK VP9.jpg`,
          id: 5,
          name: `HK VP9`,
          category: `Pistols`,
          price: 15000,
        },
        {
          image: `/Gun Backgrounds/LT Products/Pistols/Ruger 57.webp`,
          id: 6,
          name: `Ruger 57`,
          category: `Pistols`,
          price: 16000,
        },
        {
          image: `/Gun Backgrounds/LT Products/Pistols/Sig Sauer P365.webp`,
          id: 7,
          name: `Sig Sauer P365`,
          category: `Pistols`,
          price: 17000,
        },
        {
          image: `/Gun Backgrounds/LT Products/Pistols/Smith _ Wesson M_P9 M2.0.jpg`,
          id: 8,
          name: `Smith_Wesson`,
          category: `Pistols`,
          price: 18000,
        },
        {
          image: `/Gun Backgrounds/LT Products/Pistols/Springfield XDM.jpg`,
          id: 9,
          name: `Springfield XDM`,
          category: `Pistols`,
          price: 19000,
        },
        {
          image: `/Gun Backgrounds/LT Products/Pistols/Walther PDP.webp`,
          id: 10,
          name: `Walther PDP`,
          category: `Pistols`,
          price: 20000,
        },
        {
          image: `/Gun Backgrounds/LT Products/Submachine Guns/B_T APC9K Pro.jpg`,
          id: 11,
          name: `B_T APC9K Pro`,
          category: `Submachine Guns`,
          price: 21000,
        },
        {
          image: `/Gun Backgrounds/LT Products/Submachine Guns/Beretta PM12.jpg`,
          id: 12,
          name: `Beretta PM12`,
          category: `Submachine Guns`,
          price: 22000,
        },
        {
          image: `/Gun Backgrounds/LT Products/Submachine Guns/FAMAE SAF.jpg`,
          id: 13,
          name: `FAMAE SAF`,
          category: `Submachine Guns`,
          price: 23000,
        },
        {
          image: `/Gun Backgrounds/LT Products/Submachine Guns/FN P90.jpg`,
          id: 14,
          name: `FN P90`,
          category: `Submachine Guns`,
          price: 24000,
        },
        {
          image: `/Gun Backgrounds/LT Products/Submachine Guns/MAC-10.webp`,
          id: 15,
          name: `MAC-10`,
          category: `Submachine Guns`,
          price: 25000,
        },
        {
          image: `/Gun Backgrounds/LT Products/Submachine Guns/MP5 Carbine.jpg`,
          id: 16,
          name: `MP5 Carbine`,
          category: `Submachine Guns`,
          price: 26000,
        },
        {
          image: `/Gun Backgrounds/LT Products/Submachine Guns/MP7.jpg`,
          id: 17,
          name: `MP7`,
          category: `Submachine Guns`,
          price: 27000,
        },
        {
          image: `/Gun Backgrounds/LT Products/Submachine Guns/Scorpion EVO 3.webp`,
          id: 18,
          name: `Scorpion EVO 3`,
          category: `Submachine Guns`,
          price: 28000,
        },
        {
          image: `/Gun Backgrounds/LT Products/Submachine Guns/Uzi.jpg`,
          id: 19,
          name: `Uzi`,
          category: `Submachine Guns`,
          price: 29000,
        },
        {
          image: `/Gun Backgrounds/LT Products/Submachine Guns/VFC UMP 45 DX GBB.jpg`,
          id: 20,
          name: `VFC UMP 45 DX`,
          category: `Submachine Guns`,
          price: 30000,
        },
        {
          image: `/Gun Backgrounds/LT Products/Shotguns/Benelli M2.jpg`,
          id: 21,
          name: `Benelli M2`,
          category: `Shotguns`,
          price: 31000,
        },
        {
          image: `/Gun Backgrounds/LT Products/Shotguns/Benelli Montefeltro.jpg`,
          id: 22,
          name: `Benelli Montefeltro`,
          category: `Shotguns`,
          price: 32000,
        },
        {
          image: `/Gun Backgrounds/LT Products/Shotguns/Benelli Super Black Eagle 3.webp`,
          id: 23,
          name: `Benelli Super Black Eagle 3`,
          category: `Shotguns`,
          price: 33000,
        },
        {
          image: `/Gun Backgrounds/LT Products/Shotguns/Beretta 690 Ultraleggero.webp`,
          id: 24,
          name: `Beretta 690 Ultraleggero`,
          category: `Shotguns`,
          price: 34000,
        },
        {
          image: `/Gun Backgrounds/LT Products/Shotguns/Beretta A300 Ultima Sporting.jpg`,
          id: 25,
          name: `Beretta A300 Ultima Sporting`,
          category: `Shotguns`,
          price: 35000,
        },
        {
          image: `/Gun Backgrounds/LT Products/Shotguns/Beretta A400.webp`,
          id: 26,
          name: `Beretta A400`,
          category: `Shotguns`,
          price: 36000,
        },
        {
          image: `/Gun Backgrounds/LT Products/Shotguns/CZ 712 G3.jpg`,
          id: 27,
          name: `CZ 712 G3`,
          category: `Shotguns`,
          price: 37000,
        },
        {
          image: `/Gun Backgrounds/LT Products/Shotguns/Fabarm Elos D2.webp`,
          id: 28,
          name: `Fabarm Elos D2`,
          category: `Shotguns`,
          price: 38000,
        },
        {
          image: `/Gun Backgrounds/LT Products/Shotguns/Mossberg 500.jpg`,
          id: 29,
          name: `Mossberg 500`,
          category: `Shotguns`,
          price: 39000,
        },
        {
          image: `/Gun Backgrounds/LT Products/Shotguns/Remington 870 Synthetic.webp`,
          id: 30,
          name: `Remington 870`,
          category: `Shotguns`,
          price: 40000,
        },
        {
          image: `/Gun Backgrounds/LT Products/Assault Rifles/CZ Bren 2 MS Carbine.jpg`,
          id: 31,
          name: `CZ Bren 2 MS`,
          category: `Assault Rifles`,
          price: 41000,
        },
        {
          image: `/Gun Backgrounds/LT Products/Assault Rifles/HK 416 .22LR.jpg`,
          id: 32,
          name: `HK 416 .22L`,
          category: `Assault Rifles`,
          price: 42000,
        },
        {
          image: `/Gun Backgrounds/LT Products/Assault Rifles/IWI Galil ACE.jpg`,
          id: 33,
          name: `IWI Galil ACE`,
          category: `Assault Rifles`,
          price: 43000,
        },
        {
          image: `/Gun Backgrounds/LT Products/Assault Rifles/IWI Tavor X95.avif`,
          id: 34,
          name: `IWI Tavor X95`,
          category: `Assault Rifles`,
          price: 44000,
        },
        {
          image: `/Gun Backgrounds/LT Products/Assault Rifles/M16.jpg`,
          id: 35,
          name: `M16`,
          category: `Assault Rifles`,
          price: 45000,
        },
        {
          image: `/Gun Backgrounds/LT Products/Assault Rifles/PSAK-47 GF3.jpg`,
          id: 36,
          name: `PSAK-47 GF3`,
          category: `Assault Rifles`,
          price: 46000,
        },
        {
          image: `/Gun Backgrounds/LT Products/Assault Rifles/Sig Sauer M400 Tread.webp`,
          id: 37,
          name: `Sig Sauer M400`,
          category: `Assault Rifles`,
          price: 47000,
        },
        {
          image: `/Gun Backgrounds/LT Products/Assault Rifles/Sig Sauer MCX Spear-LT.webp`,
          id: 38,
          name: `Sig Sauer MCX`,
          category: `Assault Rifles`,
          price: 48000,
        },
        {
          image: `/Gun Backgrounds/LT Products/Assault Rifles/Steyr AUG A3 M1.jpg`,
          id: 39,
          name: `Steyr AUG A3 M1`,
          category: `Assault Rifles`,
          price: 49000,
        },
        {
          image: `/Gun Backgrounds/LT Products/Assault Rifles/StG 44.jpg`,
          id: 40,
          name: `StG 44`,
          category: `Assault Rifles`,
          price: 50000,
        },
        {
          image: `/Gun Backgrounds/LT Products/Sniper Rifles/Accuracy International AS50.jpg`,
          id: 41,
          name: `International AS50`,
          category: `Sniper Rifles`,
          price: 51000,
        },
        {
          image: `/Gun Backgrounds/LT Products/Sniper Rifles/Barrett M82A1.webp`,
          id: 42,
          name: `Barrett M82A1 Long Barrel`,
          category: `Sniper Rifles`,
          price: 52000,
        },
        {
          image: `/Gun Backgrounds/LT Products/Sniper Rifles/Barrett MRAD.jpg`,
          id: 43,
          name: `Barrett MRAD Long Barrel`,
          category: `Sniper Rifles`,
          price: 53000,
        },
        {
          image: `/Gun Backgrounds/LT Products/Sniper Rifles/CheyTac M200 Intervention.webp`,
          id: 44,
          name: `CheyTac M200 Intervention`,
          category: `Sniper Rifles`,
          price: 54000,
        },
        {
          image: `/Gun Backgrounds/LT Products/Sniper Rifles/Desert Tech SRS A2.jpg`,
          id: 45,
          name: `Desert Tech SRS A2`,
          category: `Sniper Rifles`,
          price: 55000,
        },
        {
          image: `/Gun Backgrounds/LT Products/Sniper Rifles/Dragunov SVD.jpg`,
          id: 46,
          name: `Dragunov SVD`,
          category: `Sniper Rifles`,
          price: 56000,
        },
        {
          image: `/Gun Backgrounds/LT Products/Sniper Rifles/M24.jpg`,
          id: 47,
          name: `M24`,
          category: `Sniper Rifles`,
          price: 57000,
        },
        {
          image: `/Gun Backgrounds/LT Products/Sniper Rifles/McMillan TAC-50C.jfif`,
          id: 48,
          name: `McMillan TAC-50C`,
          category: `Sniper Rifles`,
          price: 58000,
        },
        {
          image: `/Gun Backgrounds/LT Products/Sniper Rifles/Precision International AWM L115A3.jpg`,
          id: 49,
          name: `International AWM`,
          category: `Sniper Rifles`,
          price: 59000,
        },
        {
          image: `/Gun Backgrounds/LT Products/Sniper Rifles/Sako TRG 42.jpg`,
          id: 50,
          name: `Sako TRG 42`,
          category: `Sniper Rifles`,
          price: 60000,
        },
    ])
    );

    function displayAdminTable(data){
        aTable.innerHTML = ``;
        if(data.length){
            data.forEach((stock, index) => {
                aTable.innerHTML += `
                  <tr>
                    <td id="adminTableSpacing">${stock.id}</td>
                    <td class="w-25" id="adminTableSpacing"><img src="${stock.image}" id="adminImage"></td>
                    <td id="adminTableSpacing">${stock.name}</td>
                    <td id="adminTableSpacing">${stock.category}</td>
                    <td id="adminTableSpacing">${stock.price}</td>
                    <td id="adminTableSpacing"><button type="button" class="adminButtons">Update</button></td>
                    <td id="adminTableSpacing"><button type="button" class="adminButtons">Remove</button></td>
                  </tr>
                `;
            });
        }else {
            aTable.innerHTML = `
            <div class="text-center">
                <div class="spinner-border" role="status">
                  <span class="sr-only"></span>
                </div>
            </div>`;
        }
    }
    displayAdminTable(items)
    

            