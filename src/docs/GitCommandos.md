# GIT e GitHub

## Definições

**Repositório remoto/online**: "Lugar" onde ficam armazenados os códigos na internet.
**Repositório local**: "Lugar" onde ficam armazenados os códigos no computador,
inclusive códigos em desenvolvimento.

**GitHub**: Repositório remoto/online, existem outros como bitbucket, gitLab, azure repositories.

**GIT**:

## Commandos GIT

**git clone <url_repo>** - copia o repositório remoto para o repositório local.

**git add .** - comando para adicionar todos os arquivos alterados ao repositório local

**git checkout .** - exclui todas as alterações feitas na branch local que ainda nn foram commitadas e nem adicionadas a head

**git checkout -b <name_branch>** - cria uma nova ramificação/branch e muda pra ela. Obs: precisa de setar a branch para subir pro repositório no primeiro push

**git fetch** - puxa as alterações que foram feitas no repositório online

**git commit -m "mensagem com a descrição do commit"** finaliza as mudanças realizadas localmente e prepara para subir pro repositório remoto

**git push origin <nomeBranch>** - comando usado para empurrar as alterações feitas na branch local para o repositório online. Será Criada uma branch com o mesmo nome

**git pull** - puxa as alterações da branch
