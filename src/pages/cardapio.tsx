import React, {
  AnchorHTMLAttributes,
  FormEvent,
  useCallback,
  useState
} from 'react';
import {
  Wrapper,
  Container,
  Head,
  CategoryContainer,
  MenuContainer
} from '../styles/pages/Cardapio';

// import { Container } from './styles';
import SEO from '../components/SEO';
import { AiOutlineCheck } from 'react-icons/ai';
import amarelinhaSrc from '../assets/fotos/amarelinha.jpg';
import cirandinhaSrc from '../assets/fotos/fotos_cortadas/cirandinha.jpg';
import correCutiaSrc from '../assets/fotos/fotos_cortadas/corre-cutia.jpg';
import feijaozinhoAmigoSrc from '../assets/fotos/fotos_cortadas/feijaozinho-amigo.jpg';
import vaquinhaAtoladaSrc from '../assets/fotos/fotos_cortadas/vaquinha-atolada.jpg';
import FloatingButton from '../components/FloatingButton';
import Modal from '../components/Modal';

interface MenuProps {
  name: string;
  image: string;
  category: string;
  description: string;
}
const Cardapio: React.FC = () => {
  const [catalog, setCatalog] = useState<MenuProps[]>([
    {
      name: 'amarelinha',
      category: 'brincadeiras',
      image: amarelinhaSrc,
      description:
        'Purê com pedaços de inhame, purê com pedaços de abóbora moranga, patinho bovino moído, lentilha, molho de tomate caseiro, couve, cebola e alho.'
    },
    {
      name: 'cirandinha',
      category: 'brincadeiras',
      image: cirandinhaSrc,
      description:
        'Purê com pedaços de inhame, purê com pedaços de abóbora moranga, patinho bovino moído, lentilha, molho de tomate caseiro, couve, cebola e alho.'
    },
    {
      name: 'corre cutia',
      category: 'brincadeiras',
      image: correCutiaSrc,
      description:
        'Purê com pedaços de batata baroa, purê com pedaços de abóbora com espinafre, peito de frango desfiado, molho de tomate caseiro, ervilha, cebola e alho.'
    },
    {
      name: 'feijaozinho amigo',
      category: 'caldinhos',
      image: feijaozinhoAmigoSrc,
      description:
        'Caldinho de feijão turbinado com beterraba, músculo bovino desfiado, molho de tomate caseiro, salsinha e cebolinha.'
    },
    {
      name: 'vaquinha atolada',
      category: 'caldinhos',
      image: vaquinhaAtoladaSrc,
      description:
        'Caldinho de feijão turbinado com beterraba, músculo bovino desfiado, molho de tomate caseiro, salsinha e cebolinha.'
    }
  ]);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [activeModalProduct, setActiveModalProduct] = useState<MenuProps>(
    catalog[0]
  );
  const handleFilter = useCallback((event: FormEvent, category: string) => {
    event.preventDefault();
    setCatalog(
      category !== ' '
        ? catalog.filter(product => product.category === category)
        : catalog
    );
  }, []);

  const handleOpenModal = useCallback((product: MenuProps) => {
    setModalIsOpen(true);
    setActiveModalProduct(product);
  }, []);

  return (
    <Wrapper>
      <FloatingButton />

      <SEO title="Cardápio" />

      <Modal
        modalIsOpen={modalIsOpen}
        product={activeModalProduct}
        setModalIsOpen={setModalIsOpen}
      />
      <Head>
        <h1>cardápio</h1>
      </Head>
      <Container>
        <CategoryContainer>
          <h2>categorias</h2>
          <ul>
            <li>
              <a onClick={event => handleFilter(event, ' ')} href="">
                Todos os sabores
              </a>
            </li>
            <li>
              <a href="" onClick={event => handleFilter(event, 'brincadeiras')}>
                Cardápio Brincadeiras
              </a>
            </li>
            <li>
              <a href="" onClick={event => handleFilter(event, 'caldinhos')}>
                Cardápio Caldinhos
              </a>
            </li>
          </ul>
          <div>
            <p>
              <strong>Papinha congelada com:</strong>
            </p>
            <div>
              <AiOutlineCheck size={20} color="#d62828" />
              <span>Ingredientes naturais </span>
            </div>
            <div>
              <AiOutlineCheck size={20} color="#d62828" />
              <span>Sem sal ou conservantes</span>
            </div>
            <div>
              <AiOutlineCheck size={20} color="#d62828" />
              <span>Embalagem BPA Free </span>
            </div>
            <p>
              É muita <strong>praticidade e amor!</strong>
            </p>
          </div>
        </CategoryContainer>
        <MenuContainer>
          {catalog.map((product, index) => (
            <div key={index} onClick={() => handleOpenModal(product)}>
              <img src={product.image} alt={product.name} />
              <span>{product.name}</span>
            </div>
          ))}
        </MenuContainer>
      </Container>
    </Wrapper>
  );
};

export default Cardapio;
