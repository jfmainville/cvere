export const resources = [

    {
        "_id": "63fc2efc94113f76ff31ac82",
        "fields": "",
        "nodeData": {
            "label": "VPCNode node",
            "id": 1,
            "status": "NOT DEPLOYED"
        },
        "nodePosition": {
            "x": -156,
            "y": 118.75
        },
        "nodeStyle": {
            "zIndex": "900",
            "border": "1px solid black",
            "width": "100",
            "height": "100"
        },
        "nodeType": "VPCNode",
        "service": "",
        "status": "NOT DEPLOYED",
    },
    {
        "_id": "6481335378431c5e99a4fd71",
        "fields": "",
        "nodeData": {
            "label": "VPCNode node",
            "id": 1,
            "status": "NOT DEPLOYED"
        },
        "nodePosition": {
            "x": -155.5,
            "y": 73.375
        },
        "nodeStyle": {
            "zIndex": "900",
            "border": "1px solid black",
            "width": "100",
            "height": "100"
        },
        "nodeType": "VPCNode",
        "service": "",
        "status": "NOT DEPLOYED",
    },
    {
        "_id": "648133cc78431c5e99a4fda3",
        "fields": "",
        "nodeData": {
            "label": "S3Node node",
            "id": 1,
            "status": "NOT DEPLOYED"
        },
        "nodePosition": {
            "x": -401.75,
            "y": 18.3125
        },
        "nodeStyle": {
            "zIndex": "1000",
            "border": "1px solid black",
            "width": "100",
            "height": "100"
        },
        "nodeType": "S3Node",
        "service": "",
        "status": "NOT DEPLOYED",
    },
    {
        "_id": "63f6db33f9239375fa7d56ae",
        "fields": "",
        "nodeData": {
            "label": "S3Node node",
            "id": "648283dfd1a8f9fe42790df7",
            "status": "NOT DEPLOYED"
        },
        "nodePosition": {
            "x": -418.125,
            "y": -63.71875
        },
        "nodeStyle": {
            "zIndex": "1000",
            "border": "1px solid black",
            "width": 166,
            "height": 62
        },
        "nodeType": "S3Node",
        "service": "",
        "status": "NOT DEPLOYED",
        "parentNode": ""
    }
]

export const edges = [
     {
    "_id": "64041c5994113f76ff31ad2e",
    "markerEnd": {
      "type": "arrowclosed"
    },
    "source": "63fc2efc94113f76ff31ac82",
    "sourceHandle": "c",
    "target": "63f6db33f9239375fa7d56ae",
    "targetHandle": "d",
    "type": "FloatingEdge",
  }
]