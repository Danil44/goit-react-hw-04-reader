import React, { Component } from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import { withRouter } from 'react-router-dom';
import Publication from '../Publication/Publication';
import Counter from '../Counter/Counter';
import Controls from '../Controls/Controls';
import styles from './Reader.module.css';

const getPageFromSearch = props =>
  Number(queryString.parse(props.location.search).item);

class Reader extends Component {
  state = {};

  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
      search: PropTypes.string.isRequired,
    }).isRequired,
    history: PropTypes.shape({}).isRequired,
  };

  componentDidMount() {
    const page = getPageFromSearch(this.props);
    const { history, location } = this.props;

    if (!page) {
      history.replace({
        pathname: location.pathname,
        search: `item=1`,
      });
    }
  }

  componentDidUpdate(prevProps) {
    const { location, history, items } = this.props;
    if (prevProps.location.search !== location.search) {
      const nextPage = getPageFromSearch(this.props);

      if (nextPage > items.length || nextPage < items.length) {
        history.replace({
          pathname: location.pathname,
          search: `item=1`,
        });
      }
    }
  }

  updateLocation = num => {
    const { history, location } = this.props;

    history.push({
      ...location,
      search: `item=${num}`,
    });
  };

  handleNextPage = () => {
    const { items } = this.props;
    let page = getPageFromSearch(this.props);
    if (page < items.length - 1) {
      this.updateLocation((page += 1));
    }
  };

  handlePrevPage = () => {
    let page = getPageFromSearch(this.props);
    if (page > 1) {
      this.updateLocation((page -= 1));
    }
  };

  render() {
    const { items } = this.props;
    const page = getPageFromSearch(this.props) || 0;
    const item = items[page];
    return (
      <div className={styles.reader}>
        <Publication {...item} />
        <Counter currentPage={page} totalPages={items.length} />
        <Controls
          onNext={this.handleNextPage}
          onPrev={this.handlePrevPage}
          disabledPrev={page === 1}
          disabledNext={page === items.length - 1}
        />
      </div>
    );
  }
}

export default withRouter(Reader);
