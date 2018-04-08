var Hpared,Bpared,Aventana,Apuerta,totaldescuento,total,AreaPared,AreaPared2,Precio,Cantidad,CanPintura,Opintura;
var res,Op,Aux,res1,res2,subtotal,descuento;
parseFloat(Hpared)
parseFloat(Bpared);
parseFloat(AreaPared);
parseFloat(Hpared);
parseFloat(Aventana);
parseFloat(totaldescuento);
parseFloat(total);
parseFloat(AreaPared2);
parseFloat(CanPintura);
parseFloat(subtotal);
parseFloat(descuento);
parseInt(CanPintura);
parseInt(res1);
Hpared=prompt("Bienvenido a Pinturas Cromatic \n\n Ingrese Altura de su Pared ");
Bpared=prompt("Ingrese Base de su pared");
AreaPared=Hpared*Bpared;
alert("El area de la pared es "+AreaPared);

     res1=prompt("Ingrese  \n\n 1__Ventana \n\n 2__Puerta  \n\n 3__Puerta y Ventana \n\n Ninguna de las 4__anteriores");
     if(res1==1)
       {
         Aventana=prompt("Ingrese Area de la Venta");
         if(Aventana>AreaPared)
           {
             alert("NO puede ser mas grande la ventana que la pared");
           }
         else
           {
         AreaPared2=AreaPared-Aventana;
         alert("Su area Real total es"+ AreaPared2);
           }
       }
      if(res1==2)
       {
       Apuerta=propmt("Ingrese Area de la Puerta");
         if(Apuerta>AreaPared)
           {
             alert("NO puede ser mas grande la ventana que la pared");
           }
         else
           {
         AreaPared2=AreaPared2-Apuerta;
         alert("Su area Real total es"+ AreaPared2);
           }
       }
      if(res1==3){
        Aventana=prompt("Ingrese Area de la Venta");
      Apuerta=prompt("Ingrese Area de la Puerta");
     if ((Aventana>AreaPared)||(Apuerta>AreaPared))
       {
         alert("Areas de Ventana o Pared No pueden ser mas Grandes que le area de la Pared");
       }
     else
     {
     AreaPared2=AreaPared-(Apuerta + Aventana);
     alert("Su area Real total es"+ AreaPared2);
     }
     }
 if(res1==4)
  {
    AreaPared2=AreaPared;
    alert("Su area Real total es"+ AreaPared2);
  }
   

 

Op=prompt("Bienvenido a Pinturas Cromatic \n\n Ingrese Pintura a comprar \n\n 1-Aceite  \n\n 2-Agua \n\n 3-Oleo");

alert("El area Total de su Pared es "+parseFloat(AreaPared2));
if(Op==1)
  {
CanPintura=(AreaPared2/13);
    alert("necesita "+CanPintura+"Litros");
    Opintura=prompt("necesita "+CanPintura+"Litros\n\n"+"Desea Comprar La pintura Por \n\n 1-| 1/2 GALON Q240.50  (1.89 Litros) | \n\n  2-| 1 GALON Q150 (3.78 Litros) | \n\n  3-| CUBETA (5 Galones o 19 Litros) | \n\n Ingres Opcion Para comprar pintura ");
    if(Opintura==1){
      CanPintura=prompt("Ingrese Cantidad de 1/2 Galones a Comprar");
      if(CanPintura>=4)
        {
          subtotal=CanPintura*240;
          descuento=subtotal-240;
      total=descuento;
      alert("El Subtotal es "+subtotal+"\n\n Total a pagar es "+total+"\n\nSu desceunto fue "+240+"\n\nTotal del 1/2 galones que compra"+CanPintura);
    }
      else
    {
      total=(CanPintura)*240;
      alert("El total a pagar es "+total+"\n\nSu desceunto fue "+0+"\n\nTotal del 1/2 galones que compra"+CanPintura);
   }
    }
    
     else if(Opintura==2){
      CanPintura=prompt("Ingrese Cantidad de 1 Galones a Comprar");
      if(CanPintura2>=3)
        {
      subtotal=(CanPintura*432);
      descuento=subtotal*0.05;
      total=Subtotal-descuento;
       alert("El Subtotal es "+subtotal+"\n\n Total a pagar es "+total+"\n\nSu desceunto fue "+descuento+"\n\nTotal de  galones que compra"+CanPintura);
    }
      else
    {
      total=(CanPintura)*240;
      alert("El total a pagar es "+total);
   }
    }
     else if(Opintura==3){
      CanPintura=prompt("Ingrese Cantidad de 1 Galones a Comprar");
      if(CanPintura>=2)
        {
      subtotal=(CanPintura*1821);
      descuento=subtotal*0.1;
      total=subtotal-descuento;
       alert("El Subtotal es "+subtotal+"\n\n Total a pagar es "+total+"\n\nSu desceunto fue "+descuento+"\n\nTotal de cubetas que compra"+CanPintura);
    }
      else
    {
      total=(CanPintura)*240;
      alert("El total a pagar es "+total);
   }
    }
  }
if(Op==2)
  {
CanPintura=(AreaPared2/13);
    alert("necesita "+CanPintura+"Litros");
    Opintura=prompt("necesita "+CanPintura+"Litros\n\n"+"Desea Comprar La pintura Por \n\n 1-| 1/2 GALON Q240.50  (1.89 Litros) | \n\n  2-| 1 GALON Q150 (3.78 Litros) | \n\n  3-| CUBETA (5 Galones o 19 Litros) | \n\n Ingres Opcion Para comprar pintura ");
    if(Opintura==1){
      CanPintura=prompt("Ingrese Cantidad de 1/2 Galones a Comprar");
      if(CanPintura>=4)
        {
          subtotal=CanPintura*150;
          descuento=subtotal-150;
      total=descuento;
      alert("El Subtotal es "+subtotal+"\n\n Total a pagar es "+total+"\n\nSu desceunto fue "+240+"\n\nTotal del 1/2 galones que compra"+CanPintura);
    }
      else
    {
      total=(CanPintura)*150;
      alert("El total a pagar es "+total+"\n\nSu desceunto fue "+0+"\n\nTotal del 1/2 galones que compra"+CanPintura);
   }
    }
    
     else if(Opintura==2){
      CanPintura=prompt("Ingrese Cantidad de 1 Galones a Comprar");
      if(CanPintura2>=3)
        {
      subtotal=(CanPintura*250);
      descuento=subtotal*0.05;
      total=Subtotal-descuento;
       alert("El Subtotal es "+subtotal+"\n\n Total a pagar es "+total+"\n\nSu desceunto fue "+descuento+"\n\nTotal de  galones que compra"+CanPintura);
    }
      else
    {
      total=(CanPintura)*250;
      alert("El total a pagar es "+total);
   }
    }
     else if(Opintura==3){
      CanPintura=prompt("Ingrese Cantidad de 1 Galones a Comprar");
      if(CanPintura>=2)
        {
      subtotal=(CanPintura*999);
      descuento=subtotal*0.1;
      total=subtotal-descuento;
       alert("El Subtotal es "+subtotal+"\n\n Total a pagar es "+total+"\n\nSu desceunto fue "+descuento+"\n\nTotal de cubetas que compra"+CanPintura);
    }
      else
    {
      total=(CanPintura)*240;
      alert("El total a pagar es "+total);
   }
    }
  }
if(Op==3)
  {
CanPintura=(AreaPared2/13);
    alert("necesita "+CanPintura+"Litros");
    Opintura=prompt("necesita "+CanPintura+"Litros\n\n"+"Desea Comprar La pintura Por \n\n 1-| 1/2 GALON Q240.50  (1.89 Litros) | \n\n  2-| 1 GALON Q150 (3.78 Litros) | \n\n  3-| CUBETA (5 Galones o 19 Litros) | \n\n Ingres Opcion Para comprar pintura ");
    if(Opintura==1){
      CanPintura=prompt("Ingrese Cantidad de 1/2 Galones a Comprar");
      if(CanPintura>=4)
        {
          subtotal=CanPintura*386;
          descuento=subtotal-386;
      total=descuento;
      alert("El Subtotal es "+subtotal+"\n\n Total a pagar es "+total+"\n\nSu desceunto fue "+240+"\n\nTotal del 1/2 galones que compra"+CanPintura);
    }
      else
    {
      total=(CanPintura)*386;
      alert("El total a pagar es "+total+"\n\nSu desceunto fue "+0+"\n\nTotal del 1/2 galones que compra"+CanPintura);
   }
    }
    
     else if(Opintura==2){
      CanPintura=prompt("Ingrese Cantidad de 1 Galones a Comprar");
      if(CanPintura2>=3)
        {
      subtotal=(CanPintura*663);
      descuento=subtotal*0.05;
      total=Subtotal-descuento;
       alert("El Subtotal es "+subtotal+"\n\n Total a pagar es "+total+"\n\nSu desceunto fue "+descuento+"\n\nTotal de  galones que compra"+CanPintura);
    }
      else
    {
      total=(CanPintura)*663;
      alert("El total a pagar es "+total);
   }
    }
     else if(Opintura==3){
      CanPintura=prompt("Ingrese Cantidad de 1 Galones a Comprar");
      if(CanPintura>=2)
        {
      subtotal=(CanPintura*3103.55);
      descuento=(subtotal*0.10);
      total=subtotal-descuento;
       alert("El Subtotal es "+subtotal+"\n\n Total a pagar es "+total+"\n\nSu desceunto fue "+descuento+"\n\nTotal de cubetas que compra"+CanPintura);
    }
      else
    {
      total=(CanPintura)*3103.55;
      alert("El total a pagar es "+total);
   }
    }
  }
//noprotect 
