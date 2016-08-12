import {browserHistory} from 'react-router';

export class AboutPage extends React.Component {
  constructor(props) {
    super(props)
    this.Changename = this.Changename.bind(this)
  }

  Changename() {
    console.log(this.input.value)
    browserHistory.push(`/about/${this.input.value}`)
  }

  render() {
    return (
      <div>
        <div>
          hi, I am {this.props.params.name}.
        </div>
        <input type="text" ref={(input) => this.input = input}/>
        <button onClick={this.Changename}>submit</button>
      </div>
    )
  }
}
