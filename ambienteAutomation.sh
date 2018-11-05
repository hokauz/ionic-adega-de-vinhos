#!/bin/bash
# não esqueça de dar chmod +x neste arquivo
echo '------------- Instanaldo NVM ... ----------------'
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
echo '------------- NVM instalado ----------------'
source ~/.bash_profile
echo '------------- Instalando Node 9.9.0... ----------------'
nvm install 9.9.0
echo '------------- Node 9.9.0 instalado ----------------'
echo '------------- Atualizando NPM ----------------'
npm i -g npm@latest
echo '------------- NPM atualizado ----------------'
echo '------------- Instalando pacotes globais...  ----------------'
npm i -g cordova ionic firebase-tools yarn typescript sass @angular/cli @compodoc/compodoc
echo '------------- Pacotes globais instalados  ----------------'
echo '------------- Instalando Git Flow ----------------'
curl -L -O https://raw.github.com/nvie/gitflow/develop/contrib/gitflow-installer.sh
sudo bash gitflow-installer.sh
echo '------------- Git Flow instalado ----------------'

echo '------------- Go to work now ----------------'