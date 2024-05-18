import { useDispatch, useSelector } from 'react-redux';
import { selectFavoriteKamp } from '../../store/selectors';
import svg from '../../assets/icons/icons.svg';
import {
  BtnRemove,
  BtnShowMore,
  FavDescription,
  FavLocation,
  FavoriteInfo,
  FavoriteItem,
  FavoritesWrapper,
  KampImg,
  KampPrice,
  SvgLocation,
} from './FavoriteList.styled.js';
import Modal from '../Modal/Modal.jsx';
import KampDetails from '../KampsDetails/KampDetails.jsx';
import { useState } from 'react';
import { removeFavorite } from '../../store/favoritesSlice.js';

export default function FavoriteList() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const dispatch = useDispatch();
  const favorites = useSelector(selectFavoriteKamp);

  const toggleModal = (product) => {
    setSelectedProduct(product);
    setIsOpenModal(!isOpenModal);
  };

  const removeFromFavorites = (productId) => {
    dispatch(removeFavorite(productId));
  };

  return (
    <FavoritesWrapper>
      <ul>
        {favorites.length > 0
          ? favorites.map((product) => (
              <FavoriteItem key={product._id}>
                <KampImg
                  src={product.gallery[0]}
                  alt="img"
                  width="290"
                  height="310"
                />
                <FavoriteInfo>
                  <h2>{product.name}</h2>
                  <KampPrice>€{product.price}</KampPrice>
                  <FavLocation>
                    <SvgLocation>
                      <use href={`${svg}#icon-map`}></use>
                    </SvgLocation>
                    <p>{product.location}</p>
                  </FavLocation>

                  <FavDescription>{product.description}</FavDescription>

                  <BtnShowMore onClick={() => toggleModal(product)}>
                    Show more
                  </BtnShowMore>
                  <BtnRemove onClick={() => removeFromFavorites(product)}>
                    Remove
                  </BtnRemove>
                </FavoriteInfo>
              </FavoriteItem>
            ))
          : "You don't have any favorites yet"}
      </ul>

      {isOpenModal && (
        <Modal isOpen={isOpenModal} onClose={() => toggleModal(null)}>
          {selectedProduct && <KampDetails kamps={selectedProduct} />}
        </Modal>
      )}
    </FavoritesWrapper>
  );
}
