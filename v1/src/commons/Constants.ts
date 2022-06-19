export default {
  MINIMUM_AGE: 17,
  GRADUATE: {
    MAX_INCOME_FAMILY: 3636,
    MIN_INCOME_FAMILY: 1,
  },
  GODFATHER: {
    MIN_INCOME_MONTHLY: 15000,
  },
  REGEX: {
    EMAIL: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
    PASSWORD: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
    PHONE: /^[0-9]{8,11}$/,
    FLOAT: /^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/,
    DOCUMENT: {
      CPF: /^[0-9]{11,11}/,
      CNPJ: /^[0-9]{14,14}/,
    },
  },
  DATE: {
    ISO8601: 'yyyy-MM-ddTHH:mm:ss.SSS',
    BRAZILIAN: 'dd/MM/yyyy',
    US: 'yyyy-MM-dd',
    SP_TIMEZONE: 'America/Sao_Paulo',
  },
  METHOD: {
    POST: 'POST',
    GET: 'GET',
    PUT: 'PUT',
    DELETE: 'DELETE',
    GET_BY_ID: 'GET_BY_ID',
  },
  HTTP: {
    STATUS: {
      OK: 200,
      CREATED: 201,
      BAD_REQUEST: 400,
      UNAUTHORIZED: 401,
      FORBIDDEN: 403,
      NOT_FOUND: 404,
      CONFLICT: 409,
      INTERNAL_SERVER_ERROR: 500,
      GATEWAY_TIME_OUT: 504,
    },
  },
  EXCEPTIONS: {
    DEFAULT: 'SpGraduadoException',
    BACKEND: 'SpGraduadoBackendException',
    UNEXPECTED: 'SpGraduadoUnexpectedException',
  },
  MESSAGES: {
    DEFAULT: {
      500: 'Erro ao processar solicitação, tente novamente alguns minutos',
      503: 'O serviço está passando por instabilidades, tente novamente em alguns minutos',
      504: 'Tempo de resposta excedido. Tente novamente, se não obtiver sucesso contate um administrador',
    },
    VALIDATION: {
      EMAIL: 'O formato do email informado é inválido. Exemplo: email@provider.com',
      PASSWORD: 'A senha deve conter ao menos 8 caracteres e pelo menos um caracter especial e uma letra maiúscula',
      CONFIRMATION_PASSWORD: 'A senha e a senha de confirmação devem ser idênticas',
      TYPE: 'Selecione pelo menos um tipo de registro para prosseguir',
      NAME: 'O nome informado é inválido. Deve conter pelo menos 10 caracteres',
      DOCUMENT_NUMBER: {
        CPF: 'O CPF informado é inválido. Ele é obrigatório para o cadastro',
        CPF_CNPJ: 'O CPF/CNPJ informado é inválido. Ele é obrigatório para o cadastro',
      },
      BIRTH_DATE: 'Selecione uma data de nascimento válida',
      CONTACTS: {
        PHONE_NUMBER: 'O número de telefone é obrigatório e deve ser um telefone válido',
      },
      TERMS_AND_CONDITIONS: 'O aceite nos termos e condições deve ser feito para prosseguir com o cadastro',
      INCOME_FAMILY: 'Informe uma renda familiar válida',
      MONTHLY_INCOME: 'Informe uma renda mensal válida',
      ABOUT:
        'A descrição sobre você é obrigatória e deve conter no máximo 200 caracteres para prosseguir com o cadastro',
      COURSE: 'Selecione um curso para efetuar o cadastro',
      COLLEGE: 'Selecione uma faculdade para efetuar o cadastro',
    },
    BACKEND: {
      REGISTER: {
        DEFAULT: 'Não foi possível concluir o registro. Verifique os dados e tente novamente!',
      },
      PATRONIZE: {
        DEFAULT: 'Nào foi possível apadrinhar o graduando selecionado!',
        SUCCESS: 'Graduando apadrinhado com sucesso! Obrigado por colaborar com a causa!',
      },
      UNPATRONIZE: {
        DEFAULT: 'Nào foi possível desapadrinhar o graduando selecionado!',
        SUCCESS: 'Graduando desapadrinhado com sucesso! Esperamos tê-lo como padinho novamente!',
      },
      DELETE_ACCOUNT: {
        SUCCESS: 'Conta deletada com sucesso. Esperamos, em breve, tê-lo conosco novamente!',
      },
    },
  },
  THEMES: {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  },
  ROUTING: {
    HOME: '/',
    LOGIN: '/login',
    REGISTER: {
      SUCCESS: '/register/success',
      CREATE: '/register',
    },
    CONTACT: '/contact-us',
    ABOUTUS: '/about-us',
    MENU: {
      GODFATHER: '/menu/godfather',
      GRADUATE: '/menu/graduate',
    },
    PROFILE: {
      GODFATHER: '/profile/godfather',
    },
    FORGOT_PASSWORD: '/forgot-password',
  },
  TERMS_CONDITIONS: {
    GRADUATE:
      'Para ser apadrinhado, o aluno deve ter: Ensino médio completo ou matriculado no terceiro ano do ensino médio, Renda familiar menor ou igual a tres salários mínimos. Ao concordar com os termos, o apadrinhado consente que: Não poderá desistir do curso, O pagamento das dependências será de sua responsabilidade, Seu nome, sua data de nascimento e descrição serão visíveis para os padrinhos.',
    GODFATHER:
      'Ao concordar com os termos, o padrinho consente que: Não poderá desistir de apadrinhar qualquer aluno que escolher, Seu nome e e-mail poderão estar visíveis para os alunos que escolher apadrinhar.',
  },
  REGISTER_TYPE: {
    GRADUATE: 'Graduando',
    GODFATHER: 'Padrinho',
    ALUNO: 'Aluno',
  },
  REGISTRATION_STEPS: [
    'Escolha o tipo de cadastro',
    'Informe alguns dados',
    'Termos e Condições',
    'Confirme seus dados',
  ],
  PATH: {
    STUDENDS: {
      POST: '/v1/students',
      GET: '/v1/students',
      GET_BY_ID: '/v1/students/{studentId}',
      DELETE: '/v1/students/{studentId}',
      PUT: '/v1/students/{studentId}',
    },
    SPONSORS: {
      POST: '/v1/sponsors',
      DELETE: '/v1/sponsors/{sponsorId}',
      PUT: '/v1/sponsors/{sponsorId}/sponsorize',
    },
    CATEGORIES: {
      GET: '/v1/categories',
    },
    COLLEGES: {
      GET: '/v1/colleges',
      GET_BY_ID: '/v1/colleges/{collegeId}',
    },
    LOGIN: {
      POST: '/v1/login',
    },
  },
  CONTACTS: [
    {
      email: 'alexandre.rocha3@fatec.sp.gov.br',
      name: 'Alexandre Souza Rocha',
    },
    {
      email: 'gabriel.santos231@fatec.sp.gov.br',
      name: 'Gabriel Espanhol Santos',
    },
    {
      email: 'gabriel.sousa17@fatec.sp.gov.br',
      name: 'Gabriel Leandro Santos Sousa',
    },
    {
      email: 'gabrielle.santana@fatec.sp.gov.br',
      name: 'Gabrielle Nunes de Santana',
    },
    {
      email: 'luiz.silva284@fatec.sp.gov.br',
      name: 'Luiz Guilherme da Silva',
    },
    {
      email: 'matheus.silva263@fatec.sp.gov.br',
      name: 'Matheus Carpeggiane Montenegro da Silva',
    },
  ],
  DEFAULT_SPONSOR_ID: 0,
  BACKEND: {
    ERROR_MESSAGES: {
      '/v1/login': {
        POST: {
          default: 'Não foi possível efetuar o login. Verifique seu email e senha e tente novamente!',
          fromTo: [{ from: 'Not found', to: 'Usário não encontrado. Verifique os dados e tente novamente!' }],
        },
      },
      '/v1/students': {
        POST: {
          default: 'Não foi possível efetuar o cadastro. Tente novamente!',
          froTo: [
            {
              from: 'There is already a student registered with this document',
              to: 'Já existe um cadastro para o CPF informado. Verifique os dados e tente novamente!',
            },
            {
              from: 'Student Not Found',
              to: 'Não foi possivel associar o curso escolhido. Graduando não encontrado no sistema!',
            },
          ],
        },
        GET_BY_ID: {
          default: 'Não foi possivel consulta o graduando através do id informado!',
          fromTo: [{ from: 'Student Not Found', to: 'Graduando não encontrado. Verifique o cadastro!' }],
        },
        DELETE: {
          default: 'Não foi possivel deletar a conta. Tente novamente!',
          fromTo: [{ from: 'Student Not Found', to: 'Graduando não encontrado para efetuar a deleção da conta!' }],
        },
        PUT: {
          default: 'Não foi possivel associar o curso escolhido. Tente novamente!',
          fromTo: [
            {
              from: 'Student Not Found',
              to: 'Não foi possivel associar o curso escolhido. Graduando não encontrado no sistema!',
            },
          ],
        },
      },
      '/v1/sponsors': {
        POST: {
          default: 'Não foi possível efetuar o cadastro. Tente novamente!',
          froTo: [
            {
              from: 'Sponsor Already Exists',
              to: 'Já existe um cadastro para o CPF/CNPJ informado. Verifique os dados e tente novamente!',
            },
          ],
        },
        DELETE: {
          default: 'Não foi possivel deletar a conta. Tente novamente!',
          fromTo: [
            {
              from: 'Sponsor not found',
              to: 'Padrinho não encontrado para efetuar deleção da conta!',
            },
            {
              from: 'This sponsor has students',
              to: 'Não foi possível deletar a conta. Você ainda possui graduandos sendo apoiados!',
            },
          ],
        },
        PUT: {
          default: 'Não foi possivel apadrinhar o graduando escolhido. Tente novamente!',
          fromTo: [
            {
              from: 'Sponsor not found',
              to: 'Padrinho não encontrado para efetuar apadrinhamento ao graduando escolhido!',
            },
            {
              from: 'Student Not Found',
              to: 'Graduando escolhido não encontrado para efetuar apadrinhamento!',
            },
            {
              from: 'Student Already Sponsored',
              to: 'Graduando escolhido já está sendo apadrinhado. Escolha outro!',
            },
          ],
        },
      },
    },
  },
};
