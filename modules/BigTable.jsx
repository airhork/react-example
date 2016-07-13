var React = require('react');


function generateGrid( rowCount, columnCount ) {

                var valuePoints = [
                    "Daenerys", "Jon", "Sansa", "Arya", "Stannis", "Gregor", "Tyrion",
                    "Theon", "Joffrey", "Ramsay", "Cersei", "Bran", "Margaery",
                    "Melisandre", "Daario", "Jamie", "Eddard", "Myrcella", "Robb",
                    "Jorah", "Petyr", "Tommen", "Sandor", "Oberyn", "Drogo", "Ygritte"
                ];

                var valueIndex = 0;

                var grid = [];

                for ( var r = 0 ; r < rowCount ; r++ ) {

                    var row = {
                        id: r,
                        items: []
                    };

                    for ( var c = 0 ; c < columnCount ; c++ ) {

                        row.items.push({
                            id: ( r + "-" + c ),
                            value: valuePoints[ valueIndex ],
                            isHiddenByFilter: false
                        });

                        if ( ++valueIndex >= valuePoints.length ) {

                            valueIndex = 0;

                        }

                    }

                    grid.push( row );

                }

                return( grid );

 }

var DemoTableRow = React.createClass({

  render: function() {
   var columns = [
                <td>
                    { this.props.row.id }
                </td>
            ];

            // Creating a local reference so we don't have to .bind() the iterator.
            var filter = this.props.filter;

            // Translate each item into a TD element. If there is filtering being
            // applied, some of the TD elements will have the "hidden" class.
            this.props.row.items.forEach(
                function transformItem( item ) {

                    var classes = "item";

                    if ( filter && ( item.value.indexOf( filter ) === -1 ) ) {

                        classes += " hidden";

                    }

                    columns.push(
                        <td key={ item.id } className={ classes }>
                            { item.value }
                        </td>
                    );

                }
            );

            return(
                <tr>
                    { columns }
                </tr>
            );
  }
});

var BigTable= React.createClass({

  getInitialState: function() {
    return {filter:'',
            grid : generateGrid(1000, 10)
            };
  },


  shoot : function() {
    for(var i = 0; i< 2000; i++) {
      data.push({id : nextId++, name : makeid()});
    }
    this.setState({data:data});
  },


  getVisibleCount : function(newValue) {

                var count = 0;

                // We are pre-calculating the column count here because we are assuming
                // a uniform column distribution in the grid.
                var rowCount = this.state.grid.length;
                var columnCount = ( this.state.grid.length && this.state.grid[ 0 ].items.length );

                for ( var r = 0 ; r < rowCount ; r++ ) {

                    var row = this.state.grid[ r ];

                    for ( var c = 0 ; c < columnCount ; c++ ) {

                        var item = row.items[ c ];

                        var isHidden = ( newValue && ( item.value.indexOf( newValue ) === -1 ) );

                        if ( ! isHidden ) {

                            count++;

                        }

                    }

                }

                return( count );

   },


  handleFilterChange : function(event) {
    var newValue = event.target.value;
    this.getVisibleCount(newValue);
    this.setState(
      {
	filter : newValue,
	grid:this.state.grid
      }
    );
    
  },

  remove : function() {
    this.setState(
      {
	filter : '',
	grid :[]
      }
    );
  },

  add : function() {
    this.setState(
      {
	filter : '',
	grid :generateGrid(1000, 10)
      }
    );
  },
  

  render: function() {
    // If the table is being filtered, we want to add a class to the table to
            // set a default style for all the non-hidden elements.
            var tableClasses = this.state.filter
                ? "filtered"
                : null
            ;

            // Creating a local reference so we don't have to .bind() the iterator.
            var filter = this.state.filter;

            // Translate the grid into a collection of rows.
            var rows = this.state.grid.map(
                function transformRow( row ) {

                    return(
                        <DemoTableRow
                            key={ row.id }
                            row={ row }
                            filter={ filter }>
                        </DemoTableRow>
                    );

                }
            );

            return(
	      <div>
		 <input  value={this.state.filter}  onChange={this.handleFilterChange}   type="text"/>
		 <input  value="Remove"  onClick={this.remove}   type="button"/>
		 <input  value="Add"  onClick={this.add}   type="button"/>
                <table width="100%" cellSpacing="2" className={ tableClasses }>
                    <tbody>
                        { rows }
                    </tbody>
                </table>
	      </div>
            );
  }
});

module.exports = BigTable;
