@echo off
echo ############ Instalando librerias ############
echo #
call npm install
echo #
echo ############ Librerias instaladas ############
echo #
echo #
echo Ejecutando el test #1
cd 1
node 1.js
cd ..
echo Test #1 finalizado - Ver ./1/results
echo #
echo Ejecutando el test #2
cd 2
node 2.js
cd ..
echo Test #2 finalizado - Ver ./2/results
echo #
echo Ejecutando el test #3
cd 3
node 3.js
cd ..
echo Test #3 finalizado - Ver ./3/results
echo #
echo Ejecutando el test #4
cd 4
node 4.js
cd ..
echo Test #4 finalizado - Ver ./4/results
echo #
echo Ejecutando el test #5
cd 5
node 5.js
cd ..
echo Test #5 finalizado - Ver ./5/results
echo #
echo Ejecutando el test #6
cd 6
node 6.js
cd ..
echo Test #6 finalizado - Ver ./6/results
echo #
echo Ejecutando el test #7
cd 7
node 7.js
cd ..
echo Test #7 finalizado - Ver ./7/results
echo #
echo Ejecutando el test #8
cd 8
node 8.js
cd ..
echo Test #8 finalizado - Ver ./8/results
echo #
echo Ejecutando el test #9
cd 9
node 9.js
cd ..
echo Test #9 finalizado - Ver ./9/results
echo #
echo Ejecutando el test #10
cd 10
node 10.js
cd ..
echo Test #10 finalizado - Ver ./10/results
echo #
echo Ejecutando el test #11
cd 11
node 11.js
cd ..
echo Test #11 finalizado - Ver ./11/results
echo #
set /p answer= Do you want to create it now (Y/N)?