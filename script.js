$(function () {
  // Create the jstree
  $('#tree').jstree({
    'core': {
      "check_callback": true,
      'data': [
        {
          'text': 'Node 1',
          'id': '1',
          'children': [
            {
              'text': 'Child 1',
              'id': '2'
            }
          ]
        },
        {
          'text': 'Node 2',
          'id': '3'
        }
      ]
    },
    // Add a context menu plugin
    'plugins' : ["grid", "contextmenu", "dnd","massload", "search", "sort", "state", "changed", "node_customize"],
  }).on('ready.jstree', function() {
    // Add the buttons permanently
    $('.jstree-anchor')
      .append('<button class="add-btn">Add</button>')
      .append('<button class="options-btn">Options</button>');
  });

  // Handle adding a new node
  $('#tree').on('click', '.add-btn', function(e) {
    var nodeId = $(this).closest('.jstree-node').attr('id');
    var node = $('#tree').jstree().get_node(nodeId);
    var newNode = $('#tree').jstree().create_node(node);
    $('#tree').jstree().edit(newNode);
    e.stopPropagation();
  });

  // Handle showing the context menu
  $('#tree').on('click', '.options-btn', function(e) {
    var nodeId = $(this).closest('.jstree-node').attr('id');
    var node = $('#tree').jstree().get_node(nodeId);
    $('#tree').jstree().show_contextmenu(node);
    e.stopPropagation();
  });
});
