#include <math.h>
#include <emscripten.h>

EMSCRIPTEN_KEEPALIVE
int my_sqrt(int x) {
  return sqrt(x);
}
