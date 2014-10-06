class CreateBmis < ActiveRecord::Migration
  def change
    create_table :bmis do |t|
      t.integer :weight
      t.integer :height

      t.timestamps
    end
  end
end
