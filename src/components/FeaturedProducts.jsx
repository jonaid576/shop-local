import { useProductsContext } from "../context/productsContext"
import styled from "styled-components"

const FeaturedProducts = () => {
  const { featuredProducts } = useProductsContext()
  return (
    <Wrapper>
      <div className="featured-products section">
        <h1 className="title">Featured Products</h1>
        <div className="underline"></div>
        <div className="products-wrapper">
          {featuredProducts.slice(0, 3).map((product) => {
            const { id, image, name, price } = product
            return (
              <article className="card" key={id}>
                <div className="content">
                  <p className="name">{name}</p>
                  <p className="price">${price}</p>
                </div>
                <div className="img-wrapper">
                  <img className="card-img" src={image} alt={name} />
                  <div className="img-overlay"></div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </Wrapper>
  )
}
export default FeaturedProducts

const Wrapper = styled.section`
  background-color: var(--clr-body);

  .featured-products {
    padding: 3em 2em 3em 2em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .title {
    margin-bottom: 0.3em;
  }

  .underline {
    width: 100px;
    height: 5px;
    background-color: var(--clr-dark-grunge);
    margin-bottom: 3em;
  }

  .products-wrapper {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 2em;
    // background-color: magenta;
    width: 100%;
  }

  @media (min-width: 800px) {
    .products-wrapper {
      grid-template-columns: 1fr 1fr;
      gap: 2em;
    }
  }

  @media (min-width: 1000px) {
    .products-wrapper {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  .card {
    display: flex;
    flex-direction: column;
    transition: var(--transition);
  }

  .card:hover {
    transform: scale(1.1);
    cursor: pointer;
  }

  .img-wrapper {
    order: -1;
    position: relative;
    // background-color: magenta;
  }

  .img-overlay {
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 5px;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    opacity: 0;
    transition: var(--transition);
  }

  .img-overlay:hover {
    opacity: 1;
  }

  .card-img {
    border-radius: 5px;
    height: 200px;
    object-fit: cover;
    width: 100%;
  }

  .content {
    display: flex;
    justify-content: space-between;
  }

  .name {
    text-transform: capitalize;
    letter-spacing: 1px;
    color: var(--clr-dark-gray);
  }

  .price {
    color: var(--clr-dark-grunge);
  }
`
