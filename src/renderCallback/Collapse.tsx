import React, { Component } from 'react';
import Panel from './Panel';

class Collapse extends Component {

    render() {
        return (
          <div>
              <Panel title="标题一"><p>内容1</p></Panel>
              <Panel title="标题二"><p>内容2</p></Panel>
              <Panel title="标题三"><p>内容3</p></Panel>
              <Panel title="标题四"><p>内容4</p></Panel>
          </div>
        );
    }
}

export default Collapse;