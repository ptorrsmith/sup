import React from 'react'
import {shallow} from 'enzyme'

import Map from '../../components/Map'


describe('zoom', function() {
    it('zooms-in with double click', function(done) {
       assert.equal(0, map.getZoom());
  
       map.on('zoomend', function () {
          assert.equal(1, map.getZoom());
          map.off('zoomend');
          done();
       });
  
       // Simulate double-click
       happen.dblclick(map._container);
    });
  });
