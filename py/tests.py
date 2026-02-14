def test_access_elements():
    from solution import access_elements
    assert access_elements([1,2,3]) == [1,3]
    assert access_elements(['a','b']) == ['a','b']
    assert access_elements([]) is None
