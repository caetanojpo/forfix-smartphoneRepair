import {
  Box,
  Divider,
  Flex,
  Heading,
  Highlight,
  List,
  ListItem,
  OrderedList,
  Stack,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import { ScrollRestoration } from 'react-router-dom';
import PoliticsList from '../../Components/PoliticsList';
import TermsList from '../../Components/TermsList';

const PoliticsText = () => {
  const politicsList = [
    'As informações que coletamos de você',
    'Uso da sua informação',
    'Compartilhamento de suas informações',
    'Segurança e retenção de dados',
    'Cookies',
    'Seus direitos',
    'Como nos contactar',
    'Alterações à nossa política de privacidade',
  ];

  const infoList = [
    'Fornecer diretamente quaisquer serviços solicitados, incluindo respostas a perguntas ou reclamações;',
    'Permitindo que terceiros processem ou gerenciem informações para que possamos fornecer contato, informações ou os serviços solicitados;',
    'Caso você tenha consentido, concordando com estes termos;',
    'Entrar em contato com você caso tenhamos notícias para compartilhar com você sobre nossos produtos e serviços;',
    'Compartilhar esta informação dentro de nossa empresa;',
    'Compartilhar essas informações com terceiros externos para análise de marketing (em que informações sobre o caso só serão partilhados para fins correspondentes e os resultados serão devolvidos de forma anônima e agregada) ou para segmentação comportamental (caso em que a informação só será compartilhada em base agregada e anônima);',
    'Segurança, fins administrativos e legais;',
    'Exceto conforme estabelecido acima, não vamos divulgar, vender ou alugar suas informações pessoais a terceiros, a menos que você tenha consentido a este ou se formos obrigados por lei a fazê-lo. Se você concorda, mas depois mudar de ideia, pode contactar-nos e vamos cessar qualquer atividade desse tipo;',
    'Se você se registrar on-line para qualquer um dos nossos serviços você poderá receber comunicações de marketing (e-mail ou outro), mas a qualquer momento entrando em contato conosco, poderá cancelar qualquer comunicação.',
  ];

  const shareList = [
    'Dentro de nossa Empresa, incluindo todas as divisões de negócios;',
    'Com os nossos prestadores de serviços de terceiros que realizam operações de negócios em nosso nome;',
    'Para proteger e defender a Empresa (incluindo nossos Termos e Condições);',
    'Quando exigido por lei e / ou autoridades governamentais.',
  ];

  const lawList = [
    'O direito de nos pedir para atualizar e corrigir qualquer informação pessoal incorreta de que temos sobre você de forma gratuita;',
    'O direito de optar por sair de quaisquer comunicações de marketing que nós, para isso basta sua solicitação;',
    'Por favor, consulte nossa Política de Cookies para obter informações sobre os seus direitos em relação aos cookies.',
  ];

  const cookieList = [
    'O que são cookies?',
    'Como usamos cookies?',
    'Será que os cookies recolhem os meus dados pessoais?',
    'Posso dizer não a eles?',
    'Nossa lista de cookies',
    'Google Analytics',
    'Como faço para resetar ou apagar cookies?',
    'Como nos contactar',
    'Alterações da nossa política de cookies',
  ];

  const useCookieList = [
    'Lembrando de suas preferências, escolhas de privacidade / consentimento, a sua edição, configuração ou linguagem escolhida, etc;',
    'Tornar a navegação mais fácil, e permitir que as nossas páginas sejam exibidas corretamente;',
    'Identificar se você vem de outro site de algum dos nossos parceiros ou campanhas;',
    'Analisar o desempenho do nosso site com base em dados anônimos relacionados com a sua navegação (por exemplo, páginas visitadas, número de visitas, etc); usamos o Google Analytics para esta finalidade;',
    'Adequar a publicidade e banners que você vê em sites. Por exemplo, se você visitar o nosso site e nos permite colocar um cookie de publicidade comportamental, você poderá ver um dos nossos anúncios quando você visita um site de varejo. Neste caso, o cookie pode ter sido usado para adaptar o banner que você vê;',
    'Os cookies utilizados por essa Empresa neste site, são concebidos para serem utilizados apenas por nós ou pelas partes que trabalham em nosso nome.',
  ];

  const termsList = [
    {
      title: 'Limites de responsabilidade',
      text: 'O uso deste site, destina-se unicamente para fins informativos e comerciais. Nossa Empresa não será responsabilizada por quaisquer problemas e/ou funcionamento inadequado gerado pelo computador, servidor, ou pelo provedor de acesso à Internet. Reservamos nosso direito de, e a seu critério e sem qualquer obrigação de aviso prévio, modificar, desabilitar o acesso, ou suspender temporariamente ou definitivamente a visualização deste site, ou parte da mesma, ou de qualquer informação nela contida.',
    },
    {
      title: 'Aviso de privacidade',
      text: 'O usuário leu e aceita os termos contidos em nossa Política de Privacidade conforme publicado neste site.',
    },
    {
      title: ' Nomas de conduta',
      text: 'O usuário reconhece que com o uso deste site ele está sujeito a todas as normas e regulamentos aplicáveis. Concordam, especialmente, em não enviar, anexar ou transmitir de qualquer outra forma para este site qualquer material que seja: (i). ilegítimo, abusivo, ameaçador, obsceno, ofensivo, ou difamatório; (ii) prejudicial aos direitos de propriedade intelectual, à privacidade, ou a qualquer outro direito de terceiros; (iii) referente a qualquer tipo de vírus, cavalos de Troia, etc. O usuário concorda em não negociar o seu acesso e/ou o seu direito de uso do presente site, inclusive os materiais nela contidos. ',
    },
    {
      title: 'Responsabilidade do usuário',
      text: 'O usuário concorda e desde já isenta esta empresa, seus agentes e funcionários, de quaisquer responsabilidades ou responsabilidades por danos causados a terceiros em decorrência do uso inadequado deste site.',
    },
    {
      title: 'Contato',
      text: 'Por ocasião da ocorrência de qualquer problema ou para obter informações adicionais sobre nosso site e sobre os atuais Termos de Uso, entre em contato com conosco através da sessão contatos.',
    },
    {
      title: 'Disposições Gerais',
      text: 'Estes Termos de Uso não geram nenhum contrato de sociedade, franquia ou relação de trabalho entre nossa empresa e o Usuário. O Usuário manifesta ciência de que nós não nos responsabilizamos por qualquer dano, prejuízo ou perda no equipamento do Usuário causado por falhas no sistema, no servidor ou na internet decorrentes de condutas de terceiros. Também não somos responsáveis por quaisquer vírus que possa atacar o equipamento do Usuário em decorrência do acesso, utilização ou navegação no site na internet; ou como consequência da transferência de dados, arquivos, imagens, textos/áudio ou anexos enviados por e-mails. Eventualmente, o sistema poderá não estar disponível por motivos técnicos ou falhas da internet, ou por qualquer outro evento fortuito ou de força maior alheio ao nosso controle. Em decorrência disso, o Usuário não poderá atribuir a nossa empresa qualquer responsabilidade nem exigir indenização em virtude de prejuízos resultantes de dificuldades técnicas ou falhas nos sistemas ou na internet. Nosso site pode referenciar outros sites da rede, mediante a apresentação de links, o que não significa que estes sites sejam de propriedade ou operados por nós. Não somos responsáveis pelos conteúdos, práticas e serviços ofertados em referidos sites. A presença de links para outros sites não implica relação de sociedade, de supervisão, de cumplicidade ou solidariedade com esses sites e seus conteúdos.',
    },
  ];

  return (
    <Flex
      w="100%"
      justifyContent="center"
      id="politics"
      textAlign={{ base: 'left', lg: 'justify' }}
      fontSize="14px"
    >
      <Flex
        flexDir="column"
        padding={{ base: '20px 0px', lg: '40px' }}
        gap="10px"
        maxW="90%"
      >
        <Box>
          <Heading>POLÍTICA DE PRIVACIDADE</Heading>
        </Box>
        <Divider />
        <Text marginBottom="20px">
          Para Navegar em nosso site, assim como enviar qualquer informação pelo
          nosso(s) formulário(s), é importante que leia na íntegra nossa
          Política de Privacidade e Termos de Uso.
        </Text>
        <Stack spacing="15px">
          <Heading fontSize="16px">POLÍTICA DE PRIVACIDADE</Heading>
          <Stack spacing="0px">
            <Text>
              <Highlight
                query="Forfix - Assistência Técnica"
                styles={{ fontWeight: 600 }}
              >
                Este site é operado pela empresa: Forfix - Assistência Técnica
              </Highlight>
            </Text>
            <Text>
              Política e termos foram atualizados em 19 de Janeiro de 2023
            </Text>
          </Stack>
          <Text>
            Para sua informação, e comunicação, a sua privacidade é muito
            importante para nós, e nós entendemos o quanto é importante para
            você. O nosso objetivo é ser o mais claro e aberto possível sobre o
            que fazemos e porque o fazemos. Estamos comprometidos com a
            privacidade on-line de todos os nossos usuários. Nossa política de
            privacidade informa sobre o tipo de informação que recolhemos e
            processamos, o que fazemos com ela, o que fazemos para manter suas
            informações seguras, os seus direitos e como entrar em contato
            conosco.
          </Text>
          <Text>
            A única informação pessoal que teremos é o que você voluntariamente
            forneceu para nós
          </Text>
          <Heading fontSize="16px">Esta política abrange:</Heading>
          <PoliticsList list={politicsList} />
          <Heading fontSize="16px">
            AS INFORMAÇÕES QUE COLETAMOS DE VOCÊ
          </Heading>
          <Text>
            Em geral, você pode visitar o nosso site sem nos dizer quem você é
            ou nos fornecer qualquer informação pessoal.
          </Text>
          <Text>
            No entanto, quando você acessar e navegar neste site (incluindo
            quando você enviar informações pessoais para nós através de campos
            de dados no site, como por exemplo um formulário de inscrição ou
            formulário do &apos;Fale Conosco&apos;), podemos direta e
            indiretamente recolher e processar certas informações, incluindo,
            mas não limitado a, o seguinte:
          </Text>
          <Text>
            Informações pessoais (por exemplo, nome, endereço, detalhes de
            contato, etc).
          </Text>
          <Text>
            Detalhes de visitas ao site (por exemplo, o seu endereço de IP, nome
            do ISP, tipo de navegador, as páginas visitadas, etc).
          </Text>
          <Text>
            Outros pormenores, se necessário (por exemplo, exigidos em um
            formulário de inscrição, Fale Conosco, etc).
          </Text>
          <Text>
            Também podemos controlar a forma como você usa nosso site e usar
            essa informação para direcionar nossa publicidade (por favor
            consulte a nossa Política de Cookies para obter mais informações
            sobre o assunto).
          </Text>
          <Heading fontSize="16px"> USO DA SUA INFORMAÇÃO</Heading>
          <Text>
            O objetivo para os quais pedimos, processamos e armazenamos suas
            informações pessoais inclui, mas não se restringe a:
          </Text>
          <PoliticsList list={infoList} />
          <Heading fontSize="16px">COMPARTILHAR SUAS INFORMAÇÕES</Heading>
          <Text>
            Aceitando nossos termos de Política de Privacidade, podemos
            compartilhar suas informações:
          </Text>

          <PoliticsList list={shareList} />

          <Heading fontSize="16px">SEGURANÇA E RETENÇÃO DE DADOS</Heading>
          <Text>
            Em nossa Empresa, a segurança da informação é muito importante e
            temos tomado várias medidas para garantir que a sua informação é
            mantida seguro e protegido contra acesso não autorizado ou
            divulgação, tratamento ilegal, perda acidental, destruição e danos.
          </Text>
          <Text>
            Seus dados ficam armazenados em uma empresa Hospedeira Data Center,
            que tem suas próprias normas de controle interno de dados, e estes
            dados podem ser armazenados durante o tempo necessário no que a lei
            exige, lembrando que em qualquer momento pode ser solicitado sua
            exclusão, basta nos contatar solicitando.
          </Text>
          <Heading fontSize="16px">COOKIES</Heading>
          <Text>
            Por favor, consulte nossa Política de Cookies abaixo para obter
            informações sobre cookies e nosso uso deles.
          </Text>
          <Heading fontSize="16px">SEUS DIREITOS</Heading>
          <Text>Você tem os seguintes direitos:</Text>
          <PoliticsList list={lawList} />
          <Heading fontSize="16px">COMO NOS CONTACTAR</Heading>
          <Text>
            Use os dados corretos de contato (e-mail, telefone ou correio), como
            mostrado em nosso site na sessão contatos se deseja exercer qualquer
            dos seus direitos ou se você tiver quaisquer outras questões
            relacionadas com o uso de suas informações.
          </Text>
          <Heading fontSize="16px">
            ALTERAÇÕES À NOSSA POLÍTICA DE PRIVACIDADE
          </Heading>
          <Text>
            Nossa Empresa pode atualizar esta política a qualquer momento, por
            favor, verifique esta página regularmente para garantir que são
            estão atualizados.
          </Text>
          <Heading fontSize="16px">POLÍTICA DE COOKIES</Heading>
          <Text fontWeight={600}>Esta política abrange:</Text>
          <PoliticsList list={cookieList} />
          <Heading fontSize="16px">O QUE SÃO COOKIES?</Heading>
          <Text>
            Cookies são pequenos arquivos de texto que podem definir
            preferências, dependendo de suas escolhas no seu dispositivo quando
            visita o nosso website; um cookie normalmente é um arquivo de texto
            contendo um número de identificação anônima exclusiva arbitrária.
            Quando você voltar a visitar o nosso site o site irá procurar os
            cookies para ver se você tem visitado anteriormente.
          </Text>
          <Text fontWeight={600}>
            Existem duas grandes categorias de cookies:
          </Text>
          <Text>
            Os cookies persistentes: estes permanecem no dispositivo até ser
            removido manualmente ou automaticamente.
          </Text>
          <Text>
            Os cookies de sessão: estes permanecem no seu dispositivo até que
            você fechar o navegador quando eles são excluídos automaticamente.
          </Text>
          <Heading fontSize="16px">COMO USAMOS COOKIES?</Heading>
          <Text>
            Nós usamos cookies para personalizar o conteúdo que você recebe do
            nosso site, por exemplo:
          </Text>
          <PoliticsList list={useCookieList} />
          <Heading fontSize="16px">
            SERÁ QUE OS COOKIES RECOLHEM OS MEUS DADOS PESSOAIS?
          </Heading>
          <Text>
            Tecnologia de cookies não coletam informações que permitem tornar
            você pessoalmente identificável. Ele pode ser usado para
            identificá-lo como um visitante único, mas anônimo a um site.
          </Text>
          <Heading fontSize="16px">POSSO DIZER NÃO A ELES?</Heading>
          <Text>
            Você pode se recusar a aceitar alguns ou todos os cookies, basta
            ativar as configurações do seu navegador que lhe permite fazer isso.
          </Text>
          <Text>
            Você precisa estar ciente de que embora se você excluir todos os
            cookies que você pode não ser capaz de aceder a determinadas partes
            do nosso site e podemos pensar que você nunca nos visitou antes e,
            portanto, servir-lhe com o nosso Aviso de Cookies novamente.
          </Text>
          <Heading fontSize="16px">GOOGLE ANALYTICS</Heading>
          <Text>
            Este site também usa o Google Analytics, um serviço de análise
            fornecido pelo Google, Inc. ( &quot;Google&quot;). O Google
            Analytics utiliza cookies para ajudar na análise de navegação do
            site.
          </Text>
          <Heading fontSize="16px">COMO NOS CONTACTAR</Heading>
          <Text>
            Use os dados apropriados de contato (e-mail, telefone ou correio),
            em nosso site na sessão contatos se deseja exercer qualquer dos seus
            direitos ou se você tiver quaisquer outras questões relacionadas com
            o uso de suas informações.
          </Text>
          <Heading fontSize="16px">
            ALTERAÇÕES DA NOSSA POLÍTICA DE COOKIES
          </Heading>
          <Text>
            Nossa Empresa pode atualizar esta política a qualquer momento, por
            favor, verifique esta página regularmente.
          </Text>
        </Stack>

        <Stack spacing="15px">
          <Heading fontSize="16px">TERMOS DE USO</Heading>
          <List>
            <TermsList listItens={termsList} />
          </List>
        </Stack>
      </Flex>
    </Flex>
  );
};

export default PoliticsText;
