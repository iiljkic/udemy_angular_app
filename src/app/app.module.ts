import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IngredientComponent } from './components/shopping_list/shoppinglistedit/shoppinglistedit.component';
import { ShoppingListComponent } from './components/shopping_list/shoppinglist/shoppinglist.component';
import { RecipeComponent } from './components/recipes/recipe/recipe.component';
import { RecipeDetailComponent } from './components/recipes/recipe_detail/recipedetail.component';
import { RecipeItemComponent } from './components/recipes/recipe_item/recipeitem.component';
import { RecipeListComponent } from './components/recipes/recipe_list/recipelist.component';
import { HeaderComponent } from './components/header/header.component';
import { RecipesComponent } from './components/recipes/recipes.component';


@NgModule({
  declarations: [
    AppComponent,
    IngredientComponent,
    ShoppingListComponent,
    RecipeComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeListComponent,
    HeaderComponent,
    RecipesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
