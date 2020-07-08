# == Schema Information
#
# Table name: bills
#
#  id          :bigint           not null, primary key
#  author_id   :integer          not null
#  history_id  :integer          not null
#  group_id    :integer
#  cost        :decimal(, )      not null
#  description :text             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
require 'test_helper'

class BillTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
