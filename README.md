# Cadastro de carro

**RF**
- Deve ser possível cadastrar um novo carro.
- Deve ser possível listar todas as categorias.

**RN**
- Não deve ser possível cadastrar um carro com uma placa ja existente.
- O carro deve ser cadastrado, por padrão, com disponibildiade.
- O usuário responsável pelo cadastro deve ser um usuário administrador.

<br>

# Listagem de carros

**RF**
- Deve ser possível listar todos os carros disponíveis.
- Deve ser possível listar todos os carros disponíveis pelo nome da categoria.
- Deve ser possível listar todos os carros disponíveis pelo nome da marca.
- Deve ser possível listar todos os carros disponíveis pelo nome do carro.

**RN**
- O usuário não precisa estar logado no sistema.

<br>

# Cadastro de Especificação no carro

**RF**
- Deve ser possível cadastrar uma especificação para um carro.
- Deve ser possível listar todas as especificações.
- Deve ser possível listar todos os carros.

**RN**
- Não deve ser possível cadastrar uma especificação para um carro não cadastrado.
- Não deve ser possível cadastrar uma especificação já existente para o mesmo carro.
- O usuário responsável pelo cadastro deve ser um usuário administrador.

<br>

# Cadastro de imagens do carro

**RF**
- Deve ser possível cadastrar a imagem do carro
- Deve ser possível listar todos os carros

**RNF**
- Utilizar o multer para upload dos arquivos

**RN**
- O usuário deve poder cadastrar mais de uma imagem para o mesmo carro.
- O usuário responsável pelo cadastro deve ser um usuário administrador.

<br>

# Aluguel de carro

**RF**
- Deve ser possível cadastrar um aluguel.

**RN**
- O aluguel deve ter duração minima de 24 horas.
- Não deve ser possível cadastrar um novo aluguel caso ja exista um aberto para o mesmo usuário.
- Não deve ser possível cadastrar um novo aluguel caso ja exista um aberto para o mesmo carro.
- Ao realizar aluguel o statis do carro deverá ser alterado para indisponivel

<br>

# Devoução de carro

**RF**
- Deve ser possível realizar a devolução de um carro

**RN**
- Se o carro for devolvido com menos de 24 horas, deverá ser cobrado diária competa
- Ao realizar devlução o carro devera ser liberado para outro aluguel
- Ao realizar devolução o usuario devera ser liberado para outro aluguel
- Ao realizar devolução devera calcular o total do aluguel
- Caso o horario de devolucao seja superior ao horario previsto de entrega, devera ser cobrado multa proporcional aos dias de atraso
- Caso haja multa, devera ser somado ao total de aluguel