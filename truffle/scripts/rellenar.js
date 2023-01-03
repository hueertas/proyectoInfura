module.exports = async callback => {

    try {
        const ReslabEtsit = artifacts.require("./ReslabEtsit.sol");

        // Usar las cuentas de usuario
        const accounts = await web3.eth.getAccounts();
        if (accounts.length < 8) {
            throw new Error("No hay cuentas.");
        }

        let reslabetsit = await ReslabEtsit.deployed();

        // Identificar al owner:
        let owner = await reslabetsit.owner();
        console.log("Cuenta del owner =", owner);

      

     console.log("Matricular Alumnos:");
        let evaAccount = accounts[1];
        let CarmenAccount = accounts[2];
        let JaimeAccount = accounts[3];
        let PaulaAccount = accounts[4];
        console.log("Cuenta de Eva =", evaAccount);
       // console.log("Cuenta de Pepito =", pepeAccount);
      await reslabetsit.automatricula("Eva Martinez", "em@dominio.es","einb", {from: evaAccount});
      await reslabetsit.automatricula("owner", "owner@dominio.es", "todas", {from: owner});
      await reslabetsit.automatricula("Carmen Sánchez", "cs@dominio.es", "todas", {from: CarmenAccount});
      await reslabetsit.automatricula("Jaime Pérez", "jp@dominio.es", "todas", {from: JaimeAccount});
      await reslabetsit.automatricula("Paula Huertas", "ph@dominio.es", "todas", {from: PaulaAccount});


       console.log("Registrar Profes:");
        let SantiagoAccount = accounts[5];
        let PabloAccount = accounts[6];
        console.log("Cuenta de Santiago =", SantiagoAccount);
        console.log("Cuenta de Pablo =", PabloAccount);
      await reslabetsit.autoRegistro("Santiago", "Santiago@dominio.es","einb", "telematica","1",{from: SantiagoAccount});
      await reslabetsit.autoRegistro("Pablo", "Pablo@dominio.es", "core", "telematica","2",{from: PabloAccount});


        console.log("Crear Asignaturas:");
        await reslabetsit.creaAsignatura("Core",0, "info");
        await reslabetsit.creaAsignatura("Einb ",1, "info");
        await reslabetsit.creaAsignatura("Segu ",3, "info");
        await reslabetsit.creaAsignatura("Elmg ",2, "info");
        await reslabetsit.creaAsignatura("sdg1 ",2, "info");
        await reslabetsit.creaAsignatura("sdg2 ",2, "info");
        await reslabetsit.creaAsignatura("programacion ",0, "info");
        await reslabetsit.creaAsignatura("celt ",1, "info");
        await reslabetsit.creaAsignatura("diseñoweb ",0, "info");
        await reslabetsit.creaAsignatura("programacion2 ",0, "info");
        await reslabetsit.creaAsignatura("fisica ",4, "info");

    

    


        
       console.log("Crear  laboratrios:");
       await reslabetsit.creaLaboratorio(0,"lab0", "core,programcion1,programcion2,diseñoweb", "info");
       await reslabetsit.creaLaboratorio(1,"lab1 ", "Einb,Celt", "info");
       await reslabetsit.creaLaboratorio(2,"lab2 ", "elmg,sdg1,sdg2", "info");
       await reslabetsit.creaLaboratorio(3,"lab3 ", "segu", "info");
       await reslabetsit.creaLaboratorio(4,"lab4 ", "fisica", "info");
       await reslabetsit.creaLaboratorio(5,"lab5 ", "sdg2", "info");
       await reslabetsit.creaLaboratorio(6,"lab6 ", "algebra", "info");
       await reslabetsit.creaLaboratorio(7,"lab7 ", "adsw", "info");
       await reslabetsit.creaLaboratorio(8,"lab8 ", "dbor", "info");
       await reslabetsit.creaLaboratorio(9,"lab9 ", "quimica", "info");
       
        


       console.log("Crear  puestos:");
       await reslabetsit.creaPuesto("C01", 1);
       await reslabetsit.creaPuesto("C02", 1);
       await reslabetsit.creaPuesto("C03", 1);
       await reslabetsit.creaPuesto("C04", 1);
       await reslabetsit.creaPuesto("C05", 1);
       await reslabetsit.creaPuesto("C06", 1);
       await reslabetsit.creaPuesto("C07", 1);
       await reslabetsit.creaPuesto("C08", 1);
       await reslabetsit.creaPuesto("C09", 1);
       await reslabetsit.creaPuesto("C10", 1);
       await reslabetsit.creaPuesto("C11", 1);
       await reslabetsit.creaPuesto("C12", 1);
       await reslabetsit.creaPuesto("C13", 1);
       await reslabetsit.creaPuesto("C14", 1);
       await reslabetsit.creaPuesto("C15", 1);
       await reslabetsit.creaPuesto("C16", 1);
       await reslabetsit.creaPuesto("C17", 1);
       await reslabetsit.creaPuesto("C18", 1);
       await reslabetsit.creaPuesto("C19", 1);
       await reslabetsit.creaPuesto("C20", 1);
      /* await reslabetsit.creaPuesto("C01", 0);
       await reslabetsit.creaPuesto("C02", 0);
       await reslabetsit.creaPuesto("C03", 0);
       await reslabetsit.creaPuesto("C04", 0);
       await reslabetsit.creaPuesto("C05", 0);
       await reslabetsit.creaPuesto("C06", 0);
       await reslabetsit.creaPuesto("C07", 0);
       await reslabetsit.creaPuesto("C08", 0);
       await reslabetsit.creaPuesto("C09", 0);
       await reslabetsit.creaPuesto("C10", 0);*/


      console.log("Crear  turnos:");
       await reslabetsit.creaTurno("10:00-11:00", 12345678);
       await reslabetsit.creaTurno("11:00-12:00",12345679);
       await reslabetsit.creaTurno("12:00-13:00",12345689);
       await reslabetsit.creaTurno("13:00-14:00",12345699);
       await reslabetsit.creaTurno("16:00-17:00",16347649);
       await reslabetsit.creaTurno("17:00-18:00",12345639);
       await reslabetsit.creaTurno("18:00-19:00",12385639);
       await reslabetsit.creaTurno("19:00-20:00",12395639);
 

   

      const tl =  await reslabetsit.turnosLength();
      //const pl =  await reslabetsit.puestosDelLaboratorioLength(_indexlab);

      console.log("numero de turnos", tl);

     console.log("Añadir reservas:");
      await reslabetsit.guardarReserva( 1, 1655416801, 1,"core", {from: owner}); 
      await reslabetsit.guardarReserva( 2, 1655416802, 2, {from: owner});
      await reslabetsit.guardarReserva( 2, 1655416803, 1, {from: owner});

      let x = await reslabetsit.datosReservaPorLabPuestoTurno( 1, 1655416800, 1); 
      let y = await reslabetsit.datosReservaPorLabPuestoTurno( 22, 1655416800, 1); 
      let z = await reslabetsit.datosReservaPorLabPuestoTurno( 1, 1655416800, 7);

     console.log("reserva ocupada:", x );
      console.log("reserva vacia:", y );
      console.log("reserva vacia:", z );

      




        //ME DA ERROR EL METODO PORQUE??¿?¿'¡'
   console.log("quitar reservas:");
    await reslabetsit.quitarReserva( 1, 1655416801, 1,"core", {from: owner});
    let w = await reslabetsit.datosReservaPorLabPuestoTurno(  1, 1655416800, 1);
    console.log("reserva vacia:", w ); 


    } catch (err) {   // Capturar errores
        console.log(`Error: ${err}`);
    } finally {
        console.log("FIN");
    }

    callback();      // Terminar

};
//npx truffle compile
//npx truffle migrate
//npx truffle migrate --reset --compile-all
//npx truffle exec scripts/rellenar.js
//https://www.epochconverter.com/

//npx truffle test

//Alomejor hace falta cambiar version node ???

//errores

