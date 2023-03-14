import { useState, useEffect } from "react";
import { TreeView, TreeItem } from "@mui/lab";
import { ExpandMore, ChevronRight } from "@mui/icons-material";
import { Checkbox } from "@mui/material";
// Json data
import data from '../JSON/data.json';
// console.log(data)

//BFS algorithm to find node by his ID

const bfssearchalgo = (graph, targetId) => {

  const queue = [...graph];

  while (queue.length > 0) {
    const currNode = queue.shift();
    if (currNode.id === targetId) {
      return currNode;
    }
    if (currNode.children) {
      queue.push(...currNode.children);
    }
  }
  return []; // Target node not found
};

function Checkboxes() {

  const [selectnode, setSelectNode] = useState([]);
  useEffect(() => {
    // console.log("Selected Nodes:");
    console.log(JSON.stringify(selectnode, null, 4));
  }, [selectnode]);

  // Get all ids from node to his children's
  function allChildIds(node, idList = []) {
    idList.push(node.id);
    if (node.children) {
      node.children.forEach((child) => allChildIds(child, idList));
    }
    return idList;
  }

  // Get IDs of all children from specific node
  const specificChildId = (id) => {
    return allChildIds(bfssearchalgo(data, id)
    );
  };

  // Get all father IDs from specific node
  const specificFatherId = (id, list = []) => {
    const node = bfssearchalgo(data, id);
    if (node.parent) {
      list.push(node.parent);

      return specificFatherId(node.parent, list);
    }

    return list;
  };

  function childrenCheck(node, list) {
    const allChild = specificChildId(node.id);
    const nodeIdIndex = allChild.indexOf(node.id);
    allChild.splice(nodeIdIndex, 1);

    return allChild.every((nodeId) =>
      selectnode.concat(list).includes(nodeId)
    );
  }

  const handleNodeSelect = (event, nodeId) => {
    event.stopPropagation();
    const allChild = allChildIds(nodeId);
    const fathers = specificFatherId(nodeId);

    if (selectnode.includes(nodeId)) {
      // Need to de-check
      setSelectNode((prevSelectedNodes) =>
        prevSelectedNodes.filter((id) => !allChild.concat(fathers).includes(id))
      );
    } else {

      // Need to check

      const isChecked = allChild;
      for (let i = 0; i < fathers.length; ++i) {
        if (childrenCheck(bfssearchalgo(data, fathers[i]), isChecked)) {
          isChecked.push(fathers[i]);
        }
      }
      setSelectNode((prevSelectedNodes) =>
        [...prevSelectedNodes].concat(isChecked)
      );
    }
  };

  const handleExpandClick = (event) => {
    // prevent the click event from propagating to the checkbox
    event.stopPropagation();
  };

  const renderTree = (nodes) => (
    <TreeItem
      key={nodes.id}
      nodeId={nodes.id}
      onClick={handleExpandClick}
      label={
        <>
          <Checkbox
            checked={selectnode.indexOf(nodes.id) !== -1}
            tabIndex={-1}
            disableRipple
            onClick={(event) => handleNodeSelect(event, nodes.id)}
          />
          {nodes.name}
        </>
      }
    >
      {Array.isArray(nodes.children)
        ? nodes.children.map((node) => renderTree(node))
        : null}
    </TreeItem>
  );

  return (
    <TreeView
      // multiSelect
      defaultCollapseIcon={<ExpandMore />}
      defaultExpandIcon={<ChevronRight />}
      selected={selectnode}
    >
      {data.map((node) => renderTree(node))}
    </TreeView>
  );
}
export default Checkboxes

