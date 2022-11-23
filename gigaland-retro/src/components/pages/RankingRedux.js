import React, { memo, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import Select from 'react-select'
import Footer from '../components/footer';
import * as selectors from '../../store/selectors';
import { fetchAuthorRanking } from "../../store/actions/thunks";
import api from "../../core/api";


const customStyles = {
  option: (base, state) => ({
    ...base,
    background: "#212428",
    color: "#fff",
    borderRadius: state.isFocused ? "0" : 0,
    "&:hover": {
      background: "#16181b",
    }
  }),
  menu: base => ({
    ...base,
    background: "#212428 !important",
    borderRadius: 0,
    marginTop: 0
  }),
  menuList: base => ({
    ...base,
    padding: 0
  }),
  control: (base, state) => ({
    ...base,
    padding: 2
  })
};


const options = [
  { value: 'Last 7 days', label: 'Last 7 days' },
  { value: 'Last 24 hours', label: 'Last 24 hours' },
  { value: 'Last 30 days', label: 'Last 30 days' },
  { value: 'All time', label: 'All time' }
]
const options1 = [
  { value: 'All categories', label: 'All categories' },
  { value: 'Art', label: 'Art' },
  { value: 'Music', label: 'Music' },
  { value: 'Domain Names', label: 'Domain Names' },
  { value: 'Virtual World', label: 'Virtual World' },
  { value: 'Trading Cards', label: 'Trading Cards' },
  { value: 'Collectibles', label: 'Collectibles' },
  { value: 'Sports', label: 'Sports' },
  { value: 'Utility', label: 'Utility' }
]


const RankingRedux = () => {

  const dispatch = useDispatch();
  const authorsState = useSelector(selectors.authorRankingsState);
  const authors = authorsState.data ? authorsState.data : [];

  useEffect(() => {
      dispatch(fetchAuthorRanking());
  }, [dispatch]);

  return (
    <div>
      <section className='jumbotron breadcumb no-bg'>
        <div className='mainbreadcumb'>
        <div className='container'>
            <div className='row m-10-hor'>
            <div className='col-12'>
                <h1 className='text-center'>Top NFTs</h1>
            </div>
            </div>
        </div>
        </div>
    </section>

      <section className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className="items_filter centerEl">
            <div className='dropdownSelect one'><Select className='select1' styles={customStyles} menuContainerStyle={{'zIndex': 999}} defaultValue={options[0]} options={options} /></div>
            <div className='dropdownSelect two'><Select className='select1' styles={customStyles} defaultValue={options1[0]} options={options1} /></div>
            </div>
            <table className="table de-table table-rank">
              <thead>
                <tr>
                  <th scope="col">Collection</th>
                  <th scope="col">Volume</th>
                  <th scope="col">24h %</th>
                  <th scope="col">7d %</th>
                  <th scope="col">Floor Price</th>
                  <th scope="col">Owners</th>
                  <th scope="col">Assets</th>
                </tr>
                <tr></tr>
              </thead>
              <tbody>
                {
                  authors && authors.map((author, index) => (
                    <tr key={index}>
                      <th scope="row">
                        <div className="coll_list_pp">
                          { author.avatar &&
                            <img className="lazy" src={api.baseUrl + author.avatar.url} alt=""/>
                          }
                          <i className="fa fa-check"></i>
                        </div>  
                        {author.username}
                      </th>
                      <td>{author.author_sale.volume}</td>
                      <td className={author.author_sale.daily_sales < 0 ? "d-min" : "d-plus"}>{`${author.author_sale.daily_sales < 0 ? '' : '+'}${author.author_sale.daily_sales}%`}</td>
                      <td className={author.author_sale.weekly_sales < 0 ? "d-min" : "d-plus"}>{`${author.author_sale.weekly_sales < 0 ? '' : '+'}${author.author_sale.weekly_sales}%`}</td>
                      <td>{author.author_sale.floor_price}</td>
                      <td>{author.author_sale.owners}k</td>
                      <td>{author.author_sale.assets}k</td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
            <div className="spacer-double"></div>
            <ul className="pagination justify-content-center">
              <li className="active"><span>1 - 20</span></li>
              <li><span>21 - 40</span></li>
              <li><span>41 - 60</span></li>
            </ul> 
          </div>
        </div>
      </section>
      <Footer />
    </div>
)};

export default memo(RankingRedux);