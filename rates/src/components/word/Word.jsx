import React from "react";

class Word extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: [],
      isLoading: false,
      error: null,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    fetch("http://itgirlschool.justmakeit.ru/api/words")
      .then((responce) => {
        if (responce.ok) {
          return responce.json();
        } else {
          throw new Error("Что-то пошло не так ...");
        }
      })
      .then((responce) => this.setState({ words: responce, isLoading: false }))
      .catch((error) => this.setState({ error, isLoading: false }));
  }

  render() {
    const { words, isLoading, error } = this.state;

    if (error) {
      return <p>{error.message}</p>;
    }

    if (isLoading) {
      return <p>Loading...</p>;
    }

    return (
      <ol>
        {words.map((word) => {
          return (
            <li key={word.id}>
              {word.english}-{word.russian}
            </li>
          );
        })}
      </ol>
    );
  }
}

export default Word;
