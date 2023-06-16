import React from "react";
import { WithContext as ReactTags } from "react-tag-input";
import "./Taggit.css";
import suggestions from "./Data";

const KeyCodes = {
  comma: 188,
  enter: 13,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

class Taggit extends React.Component {
  async handleDelete(i) {
    const { tags } = this.state;
    await this.setState({
      tags: tags.filter((tag, index) => index !== i),
    });
    this.props.handler(this.state.tags);
  }

  async handleAddition(tag) {
    await this.setState((state) => ({ tags: [...state.tags, tag] }));
    this.props.handler(this.state.tags);
  }

  handleDrag(tag, currPos, newPos) {
    const tags = [...this.state.tags];
    const newTags = tags.slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);

    // re-render
    this.setState({ tags: newTags });
  }

  constructor(props) {
    super(props);

    this.state = {
      tags: this.props.tags || [],
      suggestions: suggestions,
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleAddition = this.handleAddition.bind(this);
    this.handleDrag = this.handleDrag.bind(this);
  }

  render() {
    const { tags, suggestions } = this.state;
    return (
      <div>
        <ReactTags
          inputFieldPosition="top"
          placeholder="Enter skill"
          inline={true}
          tags={tags}
          suggestions={suggestions}
          handleDelete={this.handleDelete}
          handleAddition={this.handleAddition}
          handleDrag={this.handleDrag}
          delimiters={delimiters}
        />
      </div>
    );
  }
}

export default Taggit;
