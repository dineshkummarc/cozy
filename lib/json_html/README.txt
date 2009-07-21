Every node is a hash that has two properties:
 - one for data/children having the key as the element name;
 - one for attributes having the key "attributes".
If node is an array it is inlined.
Data is expressed as a primitive value:
 - string, number, boolean or date;
 - empty string for non-empty elemets;
 - null for empty elements.
Children are expressed as an array of nodes.
Attributes are expresed as a unidimmensional hash.
The components must be included before the containers.
