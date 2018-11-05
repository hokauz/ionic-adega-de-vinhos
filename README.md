# Adega de vinhos em Ionic #

Criado em : 05 de Novembro de 2018

### Setup do ambiente de produção ###

Instale o NodeJs, Cordova e Ionic, considerando que você já trabalhe com o Node Version Manager, caso não, visite esta página [NMV](https://github.com/creationix/nvm)
- Node  9.9.0
- Ionic ˆ4.3.0
- Cordova ˆ8.1.2

```
$nvm install 9.9.0
$nvm use 9.9.0
$npm i -g cordova ionic
```
Estaremos utilizando o yarn como nosso gerenciado de pacotes npm, ele também é um pacote npm, mas otimizado.

### Setup automatizado para mac ou linux
Nesta mesma pasta existe um arquivo chamado ambienteAutomation.sh.

1. Abra o terminal
2. Vá até a pasta local onde está este arquivo
3. Execute o comando de permisão de execução `chmod +x ambienteAutomation.sh`
ou `sudo chmod +x ambienteAutomation.sh`
4. Execute o arquivo `./ambienteAutomation.sh`

Se você tiver feito tudo direitinho, ele fará todo o processo necessário para começar a trabalhar no projeto, tirando a parte do git-kraken e a inicialização do git flow (pls, não esqueça de inicar o git flow após clonar o projeto), blz? Lembrando que em algumas etapas ele pode pedir senha de root.

Author
[Thiago Honorato](https://www.linkedin.com/in/thiagohonorato/)

### Ao Clonar o Repositório ###
1. Inicie o git flow
```$git glow init```
2. Baixe as depêndencias npm
```$yarn i```

### Como fazer o Build? ###
##### Web
```$ionic cordova build --aot --prod```
##### Android
```$ionic cordova build android -p```
##### 
```$ionic cordova build ios -p```

### Referênciamento básico ###
Com Ionic Framework, nós devemos chamar referencias os paths dos assets com o padrão:
* quando usado em qualquer html
```
"assets/..."
```
* quando usado em qualquer scss
```
"../assets/..."
```
---------------------------------------------
## Autor ##
* [Thiago Honorato](https://br.linkedin.com/in/thiagohonorato) (Dev)
